import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the authorization header
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Niet geautoriseerd - geen token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role for bypassing RLS
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Create client with user's token to verify their identity
    const supabaseUser = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false },
      }
    );

    // Verify the user is authenticated
    const { data: { user }, error: userError } = await supabaseUser.auth.getUser();
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Niet geautoriseerd - ongeldige sessie" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if ANY admin users already exist (using service role to bypass RLS)
    const { data: existingAdmins, error: checkError } = await supabaseAdmin
      .from("user_roles")
      .select("id")
      .eq("role", "admin")
      .limit(1);

    if (checkError) {
      console.error("Error checking existing admins:", checkError);
      return new Response(
        JSON.stringify({ error: "Database fout bij controle" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // If any admin exists, deny the bootstrap
    if (existingAdmins && existingAdmins.length > 0) {
      return new Response(
        JSON.stringify({ 
          error: "Bootstrap niet beschikbaar - er bestaat al een admin",
          message: "Neem contact op met de bestaande beheerder voor toegang."
        }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if the requesting user already has a role
    const { data: existingRole } = await supabaseAdmin
      .from("user_roles")
      .select("id, role")
      .eq("user_id", user.id)
      .single();

    if (existingRole) {
      return new Response(
        JSON.stringify({ 
          error: "Je hebt al een rol toegewezen",
          current_role: existingRole.role
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create the first admin user
    const { data: newRole, error: insertError } = await supabaseAdmin
      .from("user_roles")
      .insert({
        user_id: user.id,
        role: "admin"
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error creating admin role:", insertError);
      return new Response(
        JSON.stringify({ error: "Kon admin rol niet aanmaken" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Bootstrap admin created for user: ${user.id} (${user.email})`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Je bent nu beheerder van deze applicatie",
        user_id: user.id,
        role: "admin"
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Bootstrap admin error:", error);
    return new Response(
      JSON.stringify({ error: "Interne serverfout" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
