import {getAllTracks} from "$lib/api/db";

export async function load({cookies}) {
  const tracks = await getAllTracks();
  const currentSessionUserId = cookies.get('session_id');
  const userid = currentSessionUserId ? Number(currentSessionUserId) : -1;

  return {
    response: tracks,
    user_id: userid
  }

}
