import { supabase } from "$lib/supabase";
 
export async function load({ params }) {
  var id = Number(params.slug);
  const { data, error } = await supabase.from("test").select('*').eq('id', id);

  if (data) {
    return {
      response: {
        person: data[0],
        imgUrl: (await getImgUrl(id)).publicUrl,
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
  .getPublicUrl(`images/${id}.jpg`)

  console.log(data)

  return {
    publicUrl: data,
  }

}