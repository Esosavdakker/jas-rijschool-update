-- Create table for customer package signups
CREATE TABLE public.package_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  package_name TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (public insert, no auth needed for customers)
ALTER TABLE public.package_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (customers signing up)
CREATE POLICY "Anyone can insert signups" 
ON public.package_signups 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via service role (for admin access later)
CREATE POLICY "Service role can read all signups" 
ON public.package_signups 
FOR SELECT 
USING (false);