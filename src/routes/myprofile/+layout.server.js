import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {    
    const userId = cookies.get('session_id');
    
    if(!userId) {
        throw redirect(307, '/login');
    }

    return {
        user: {
            id: userId
        }
    };
}