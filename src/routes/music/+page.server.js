import { supabase } from "$lib/supabase";

export async function load() {
  const { data } = await supabase.from("test").select();
  return {
    guys: data ?? [],
  };
}