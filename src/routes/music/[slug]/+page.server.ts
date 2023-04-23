import { getTrackById } from '$lib/api/db';
export const prerender = false;

export async function load({ params, cookies }) {
  const data = await getTrackById(Number(params.slug));
  const currentSessionUserId = cookies.get('session_id');
  const userid = currentSessionUserId ? Number(currentSessionUserId) : -1;

  return {
    response: data,
    user_id: userid
  }
}