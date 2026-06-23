import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.local.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.local.VITE_SUPABASE_ANON_KEY;

const supabaseUrl = "https://adaykfcspxybldsigixx.supabase.co";
    const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYXlrZmNzcHh5Ymxkc2lnaXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNDIyNzgsImV4cCI6MjA5NjYxODI3OH0.QvpGoP1aDJjBzWv6kzTLBmM5C6vo-Rk-wffnQbsoSSg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
