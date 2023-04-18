// @ts-nocheck
import { supabase } from "$lib/supabase";
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const _data = await request.formData();
        const login = _data.get('login') ?? "";
        const password = _data.get('password');
        
        if (!await existInDb(login, password)) {
            return fail(400, { login, incorrect: true });
        }
        
        let user = await getUserByUsername(login);

        cookies.set('session_id', user.id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 30
        });

        return {
            success: true,
            user: user,
        };
    }
};

/**
 * @param {any} login
 * @param {any} password
 */
async function existInDb(login, password) {
    const { data } = await supabase.from('user').select()
    .eq('username', login)
    .eq('password', password);

    if (data?.length == 1) {
        return true;
    } else {
        return false;
    }
}


async function getUserByUsername(username) {
    const { data } = await supabase.from('user').select()
    .eq('username', username)

    return data[0];
}