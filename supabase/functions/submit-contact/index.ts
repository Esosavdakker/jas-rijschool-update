import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3 // Max 3 submissions per minute per IP

function getClientIP(req: Request): string {
  // Try various headers that might contain the real IP
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = req.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
  // Fallback - use a hash of user-agent + other headers for some differentiation
  const ua = req.headers.get('user-agent') || 'unknown'
  return `ua-${ua.substring(0, 50)}`
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }
  
  record.count++
  return false
}

// Simple hash function for IP anonymization
async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + '-salt-jas-rijschool')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16)
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const clientIP = getClientIP(req)
    
    // Check rate limit
    if (isRateLimited(clientIP)) {
      return new Response(
        JSON.stringify({ error: 'Te veel verzoeken. Probeer het over een minuut opnieuw.' }),
        {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const body = await req.json()
    const { name, email, phone, message, package_name, gdpr_consent } = body

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
      return new Response(
        JSON.stringify({ error: 'Ongeldige naam' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig e-mailadres' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (phone && (typeof phone !== 'string' || phone.length > 20)) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig telefoonnummer' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 2000) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig bericht' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    if (gdpr_consent !== true) {
      return new Response(
        JSON.stringify({ error: 'GDPR toestemming is vereist' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with service role for insert
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Hash IP for privacy
    const ipHash = await hashIP(clientIP)

    const { error } = await supabase.from('package_signups').insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      package_name: package_name || 'Algemeen contact',
      message: message.trim(),
      gdpr_consent: true,
      consent_timestamp: new Date().toISOString(),
      data_retention_until: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000 * 2).toISOString(),
      ip_hash: ipHash,
    })

    if (error) {
      console.error('Database error:', error)
      return new Response(
        JSON.stringify({ error: 'Er ging iets mis bij het opslaan' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Er ging iets mis' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})