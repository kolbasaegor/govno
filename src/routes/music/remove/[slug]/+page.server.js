import { redirect } from '@sveltejs/kit';
import { removeTrack} from '$lib/api/db';

export async function load({params, cookies}) {
    const trackId = Number(params.slug);

    await removeTrack(trackId);

    // TODO refresh the page
    throw redirect(307, '/music');
}