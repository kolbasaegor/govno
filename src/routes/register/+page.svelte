<svelte:head>
    <title>Register</title>
</svelte:head>

<script lang="ts">
	import type { ActionData } from "./$types";
    /** @type {import('./$types').ActionData} */
    export let form: ActionData;
</script>

<div>
    <h1>Register</h1>
    <form method="POST">
        {#if form?.incorrect}<p>You're already registered!
            please <a href="/login">login</a>
        </p>
        {/if}

        <p><label>
            Login(yout username):
            <input type="text" name="login" required>
        </label></p>
        <p><label>
            Password:
            <input type="password" name="password" required>
        </label></p>
        <button type="submit">Register</button>
    </form>
</div>