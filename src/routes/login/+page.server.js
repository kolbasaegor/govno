import { userExistInDb, getUserByUsername } from "$lib/api/db";
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const _data = await request.formData();
        const login = _data.get('login') ?? "";
        const password = _data.get('password');
        
        if (!await userExistInDb(login, password)) {
            return fail(400, { login, incorrect: true });
        }
        
        const user = await getUserByUsername(login);

        // @ts-ignore
        cookies.set('session_id', user.id, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
        });

        return {
            success: true,
            user: user,
        };
    }
};
