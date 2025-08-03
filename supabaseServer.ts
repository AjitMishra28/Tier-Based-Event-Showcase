import "server-only";
import { createClient } from "@supabase/supabase-js";

export function getServerSupabase() {
  const url = 'https://ekorgiaqhwgoogxreiok.supabase.co';
  const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrb3JnaWFxaHdnb29neHJlaW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4Njg2NjYsImV4cCI6MjA2OTQ0NDY2Nn0.jX53rVJnt0kGoY7hxE4aWkgUDpPanDQ0bHjbLE3FnWw';
  // Service role: server-only usage. Do NOT expose to the browser.
  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
