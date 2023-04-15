import { supabase } from "$lib/supabase";
import { error } from "@sveltejs/kit";
 
export async function load({ params }) {
  var id = Number(params.slug);
  const { data, error } = await supabase.from("test").select('*').eq('id', id);

  if (data) {
    return {
      response: {
        person: data[0],
        imgUrl: (await getImgUrl(id)).publicUrl,
        audioUrl: (await getAudioUrl(id)).publicUrl,
      }
    }
  } else {
    return {
      response: null
    }
  }
}

/**
 * @param {number} id
 */
async function getImgUrl(id) {
  const { data } = supabase
  .storage
  .from('media')
  .getPublicUrl(`images/profile_pics/${id}.jpg`);

  //console.log(data);

  return {
    publicUrl: data,
  }
}

/**
 * @param {number} id
 */
async function getAudioUrl(id) {
  const { data } = supabase
  .storage
  .from('media')
  .getPublicUrl(`audio/${id}.mp3`);

  console.log(data);

  return {
    publicUrl: data,
  }
}