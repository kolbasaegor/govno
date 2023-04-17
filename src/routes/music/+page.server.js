import { supabase } from "$lib/supabase";

export async function load() {
  const { data } = await supabase.from("track").select();
  let tracks = data;

  let response = [];

  // @ts-ignore
  for (const t of tracks) {
    let { data } = await supabase.from('user').select('id, login').eq('id', t.uploaded_by_id);
    // @ts-ignore
    let userInfo = data[0];

    response.push({
      meta: t,
      audioUrl: await generateAudioUrl(t.path_to_audio),
      imgUrl: await generateImgUrl(t.path_to_img),
      userInfo: userInfo,
    });
  }

  return {
    response: response,
  }

}

/**
 * @param {string} path
 */
async function generateAudioUrl(path) {
  
  const { data } = await supabase
  .storage
  .from('audio')
  .getPublicUrl(path);

  return data.publicUrl;
}

/**
 * @param {string} path
 */
async function generateImgUrl(path) {
  
  const { data } = await supabase
  .storage
  .from('image')
  .getPublicUrl(path);

  return data.publicUrl;
}