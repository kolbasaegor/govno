<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div>
    <h1>Login</h1>
    <form method="POST">
        {#if form?.incorrect}<p>Incorrect login or password</p>{/if}
        <p><label>
            Your login:
            <input type="text" name="login" required>
        </label></p>
        <p><label>
            Password:
            <input type="password" name="password" required>
        </label></p>
        <button type="submit">Log In</button>
    </form>
</div>