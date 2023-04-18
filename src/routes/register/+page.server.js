import { supabase } from "$lib/supabase";
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const _data = await request.formData();
        const login = _data.get('login') ?? "";
        const password = _data.get('password');

        if (await alreadyRegistered(login)) {
            return fail(400, { login, incorrect: true });
        }

        await supabase.from('user').insert({
            username: login,
            password: password,
        })

        return { success: true };
    }
};

/**
 * @param {any} username
 */
async function alreadyRegistered(username) {
    const { data } = await supabase.from('user').select().eq('username', username);

    if (data?.length == 1) {
        return true;
    } else {
        return false;
    }
}