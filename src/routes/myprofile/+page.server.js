import {getTracksUploadedById,
        generateAudioUrl,
        generateImgUrl
} from "$lib/api/db";
import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {
    const userId = cookies.get('session_id');
    if (!userId) throw redirect(307, '/login');

  let tracks = await getTracksUploadedById(userId);

  let response = [];

  // @ts-ignore
  for (const t of tracks) {
    response.push({
      meta: t,
      audioUrl: await generateAudioUrl(t.path_to_audio),
      imgUrl: await generateImgUrl(t.path_to_img),
    });
  }

  return {
    response: response,
  }

}