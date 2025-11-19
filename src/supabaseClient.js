import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zutwxkfdvzgglbzntoux.supabase.co'; // 替换为您的 Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuYXNsdXJxdXV5eWx4cnRmanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NTU0OTksImV4cCI6MjA3ODUzMTQ5OX0.Lg2n_SQDWpNRsxHmWL4Jl4U4uKBJjlYRDFPB6NZ3VCQ'; // 替换为您的 Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey);