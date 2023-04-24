<svelte:head>
    <title>Register</title>
</svelte:head>

<script lang="ts">
	import type { ActionData } from "./$types";
    /** @type {import('./$types').ActionData} */
    export let form: ActionData;
</script>

<div>
    <form method="POST">
        <h1>Register</h1>
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

<style>
    a {
        color: #600a7a;
    }

    form {
        width: 40%;
        margin: 150px auto;
        padding: 20px 20px;
        background-color: #fff;
        border:  1px solid #dce1e6;
        border-radius: 15px;
        text-align: center;
    }
</style>