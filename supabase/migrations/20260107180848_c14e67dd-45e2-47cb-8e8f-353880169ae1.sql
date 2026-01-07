-- Create admin role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Users can only read their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

-- Only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Drop existing overly permissive policies on package_signups
DROP POLICY IF EXISTS "Anyone can insert signups" ON public.package_signups;
DROP POLICY IF EXISTS "Authenticated users can delete signups" ON public.package_signups;
DROP POLICY IF EXISTS "Authenticated users can read all signups" ON public.package_signups;

-- Create secure RLS policies for package_signups
-- Public can insert (for contact form) but with rate limiting consideration
CREATE POLICY "Public can insert signups"
ON public.package_signups
FOR INSERT
WITH CHECK (true);

-- Only admins can read all signups (protects customer data)
CREATE POLICY "Admins can read all signups"
ON public.package_signups
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update signups
CREATE POLICY "Admins can update signups"
ON public.package_signups
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete signups
CREATE POLICY "Admins can delete signups"
ON public.package_signups
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Add GDPR compliance columns to package_signups
ALTER TABLE public.package_signups
ADD COLUMN IF NOT EXISTS gdpr_consent BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS consent_timestamp TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS ip_hash TEXT,
ADD COLUMN IF NOT EXISTS data_retention_until TIMESTAMP WITH TIME ZONE;