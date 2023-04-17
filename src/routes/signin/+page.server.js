import { supabase } from "$lib/supabase";
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const _data = await request.formData();
        const login = _data.get('login') ?? "";
        const password = _data.get('password');
        
        if (!await existInDb(login, password)) {
            return fail(400, { login, incorrect: true });
        }

        return {
            success: true,
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

    console.log(data);

    if (data?.length == 1) {
        return true;
    } else {
        return false;
    }
}