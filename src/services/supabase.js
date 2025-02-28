import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://hbgmmtlcsbevdsgppbeo.supabase.co";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if(supabaseKey === undefined) {
  throw new Error("REACT_APP_SUPABASE_KEY is not set");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
