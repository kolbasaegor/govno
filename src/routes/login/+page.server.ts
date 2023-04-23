import { userExistInDb, getUserByUsername } from "$lib/api/db";
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }) => {
        const _data = await request.formData();
        const login = _data.get('login')?.toString() ?? "";
        const password = _data.get('password')?.toString() ?? "";
        
        if (!await userExistInDb(login, password)) {
            return fail(400, { login, incorrect: true });
        }
        
        const user = await getUserByUsername(login);

        if (!user) return {
            succcess: false
        }

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
