import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@2.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3 // Max 3 submissions per minute per IP

function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = req.headers.get('x-real-ip')
  if (realIP) {
    return realIP
  }
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

async function hashIP(ip: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(ip + '-salt-jas-rijschool')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16)
}

Deno.serve(async (req) => {
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

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const ipHash = await hashIP(clientIP)

    // Save to database
    const { error: dbError } = await supabase.from('package_signups').insert({
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

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Er ging iets mis bij het opslaan' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Send email notification to JAS Rijschool
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      
      try {
        // Email to JAS Rijschool
        await resend.emails.send({
          from: 'JAS Rijschool <onboarding@resend.dev>',
          to: ['jasrijschool@gmail.com'],
          subject: `Nieuwe aanmelding: ${package_name || 'Algemeen contact'}`,
          html: `
            <h2>Nieuwe aanmelding via de website</h2>
            <p><strong>Pakket:</strong> ${package_name || 'Algemeen contact'}</p>
            <p><strong>Naam:</strong> ${name.trim()}</p>
            <p><strong>E-mail:</strong> ${email.trim()}</p>
            <p><strong>Telefoon:</strong> ${phone?.trim() || 'Niet opgegeven'}</p>
            <p><strong>Bericht:</strong></p>
            <p>${message.trim().replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Dit bericht is verzonden via het contactformulier op jas-rijschool.nl</small></p>
          `,
        })
        console.log('Email to JAS Rijschool sent successfully')

        // Confirmation email to the user
        await resend.emails.send({
          from: 'JAS Rijschool <onboarding@resend.dev>',
          to: [email.trim().toLowerCase()],
          subject: 'Bedankt voor je aanmelding bij JAS Rijschool!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h1 style="color: #1e40af;">Bedankt voor je aanmelding, ${name.trim()}!</h1>
              
              <p>We hebben je aanmelding ontvangen en nemen zo snel mogelijk contact met je op.</p>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="color: #1e40af; margin-top: 0;">Jouw gegevens:</h2>
                <p><strong>Gekozen pakket/optie:</strong> ${package_name || 'Algemeen contact'}</p>
                <p><strong>Naam:</strong> ${name.trim()}</p>
                <p><strong>E-mail:</strong> ${email.trim()}</p>
                ${phone ? `<p><strong>Telefoon:</strong> ${phone.trim()}</p>` : ''}
                ${message ? `<p><strong>Jouw bericht:</strong><br>${message.trim().replace(/\n/g, '<br>')}</p>` : ''}
              </div>
              
              <p>Heb je vragen? Je kunt ons bereiken via:</p>
              <ul>
                <li>📞 Telefoon: <a href="tel:+31644793093">06 44793093</a></li>
                <li>📧 E-mail: <a href="mailto:jasrijschool@gmail.com">jasrijschool@gmail.com</a></li>
                <li>💬 WhatsApp: <a href="https://wa.me/31644793093">Stuur een bericht</a></li>
              </ul>
              
              <p>We kijken ernaar uit om je te helpen je rijbewijs te halen!</p>
              
              <p>Met vriendelijke groet,<br><strong>Alex - JAS Rijschool</strong></p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
              <p style="color: #6b7280; font-size: 12px;">
                Dit is een automatisch bericht. Je ontvangt deze e-mail omdat je je hebt aangemeld via jas-rijschool.nl
              </p>
            </div>
          `,
        })
        console.log('Confirmation email to user sent successfully')
      } catch (emailError) {
        console.error('Email error:', emailError)
        // Don't fail the request if email fails - data is already saved
      }
    } else {
      console.warn('RESEND_API_KEY not configured - email not sent')
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