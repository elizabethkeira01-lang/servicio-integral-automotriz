const SUPABASE_URL = "https://tvmftquerbehaqyavjib.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2bWZ0cXVlcmJlaGFxeWF2amliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxODA4NTgsImV4cCI6MjA5Nzc1Njg1OH0.5_FzF5C55bjbm5oMo6i2QPbyAlgGt4MOkLw0rLBsvwA";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
