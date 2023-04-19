import { createClient } from '@supabase/supabase-js'

const API_URL = 'https://zwryvquckozdxkuplcmh.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cnl2cXVja296ZHhrdXBsY21oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0ODc0ODAsImV4cCI6MTk5NzA2MzQ4MH0.7rlhTJ9yVO1w2JYm6AziS4GLD7RZEtnoO-HdpD5_8wM'

export const supabase = createClient(API_URL, ANON_KEY)