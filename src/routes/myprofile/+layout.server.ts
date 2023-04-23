import { redirect } from '@sveltejs/kit';
import { getUserById } from '$lib/api/db'
export const prerender = true;


export async function load({ cookies }) {    
    const userId = Number(cookies.get('session_id'));
    
    if(!userId) {
        throw redirect(307, '/login');
    }

    return {
        user: await getUserById(userId)
    };
}