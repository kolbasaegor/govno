<svelte:head>
    <title>Log In</title>
</svelte:head>

<script lang="ts">
	import type { ActionData } from "./$types";
    /** @type {import('./$types').ActionData} */
    export let form: ActionData;
</script>

<div>
    <form method="POST">
        <h1>Login</h1>
        {#if form?.incorrect}<div class="err">Incorrect login or password</div>{/if}
        {#if form?.success}<div class="suc">Welcome {form.user?.username} !</div>{/if}
        <p><label>
            Your login:
            <input type="text" name="login" required>
        </label></p>
        <p><label>
            Password:
            <input type="password" name="password" required>
        </label></p>
        <button type="submit">Log In</button>
        <div>
            Don't have account yet? <a href="/register"> Register </a>
        </div>
    </form>
</div>

<style>
    .suc {
        color: #15a350;
    }

    .err {
        color: #d10000;
    }

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