import { redirect } from '@sveltejs/kit';
import { removeTrack} from '$lib/api/db';
export const prerender = false;

export async function load({params, cookies}) {
    const trackId = Number(params.slug);

    console.log('che');
    await removeTrack(trackId);

    // TODO refresh the page
    throw redirect(307, '/music');
}