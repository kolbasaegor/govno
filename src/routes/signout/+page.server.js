import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {
    cookies.delete('session_id');

    throw redirect(307, '/login');

    return {
        success: true
    }
}