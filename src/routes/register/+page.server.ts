import { userAlreadyRegistered, registerUser } from "$lib/api/db";
import { redirect } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const _data = await request.formData();
        const login = _data.get('login')?.toString() ?? "";
        const password = _data.get('password')?.toString() ?? "";

        if (await userAlreadyRegistered(login)) {
            return fail(400, { login, incorrect: true });
        }

        await registerUser(login, password);

        throw redirect(307, '/login');
    }
};