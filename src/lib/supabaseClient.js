
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://trwwfkeelbsnzsumnfka.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyd3dma2VlbGJzbnpzdW1uZmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNzI4NjcsImV4cCI6MjA2Mjk0ODg2N30.T7deHRj6X1ioPd_9uR31K8spZkLMMPiUsWmfFrZ3di0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
