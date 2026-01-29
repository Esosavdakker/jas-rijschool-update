-- Remove unused contact form infrastructure

-- Drop RLS policies first
DROP POLICY IF EXISTS "Public can insert signups" ON public.package_signups;
DROP POLICY IF EXISTS "Admins can read all signups" ON public.package_signups;
DROP POLICY IF EXISTS "Admins can update signups" ON public.package_signups;
DROP POLICY IF EXISTS "Admins can delete signups" ON public.package_signups;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage all roles" ON public.user_roles;

-- Drop the package_signups table
DROP TABLE IF EXISTS public.package_signups;

-- Drop the user_roles table
DROP TABLE IF EXISTS public.user_roles;

-- Drop the has_role function
DROP FUNCTION IF EXISTS public.has_role(uuid, app_role);

-- Drop the app_role enum type
DROP TYPE IF EXISTS public.app_role;