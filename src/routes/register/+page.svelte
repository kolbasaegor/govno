<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div>
    <h1>Register</h1>
    <form method="POST">
        {#if form?.incorrect}<p>You're already registered!
            please <a href="/login">login</a>
        </p>{/if}
        {#if form?.success}<p>You're зарегистрирован братанчик красавчик!
            please <a href="/login">login</a>
        </p>{/if}

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