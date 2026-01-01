-- Update RLS policy to allow authenticated users to read signups
DROP POLICY IF EXISTS "Service role can read all signups" ON public.package_signups;

CREATE POLICY "Authenticated users can read all signups" 
ON public.package_signups 
FOR SELECT 
TO authenticated
USING (true);

-- Allow authenticated users to delete signups
CREATE POLICY "Authenticated users can delete signups" 
ON public.package_signups 
FOR DELETE 
TO authenticated
USING (true);