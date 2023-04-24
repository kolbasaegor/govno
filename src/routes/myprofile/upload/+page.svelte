<svelte:head>
    <title>Upload</title>
</svelte:head>

<script lang="ts">
	import type { ActionData } from "./$types";
    /** @type {import('./$types').ActionData} */
    export let form: ActionData;
</script>

<div>
    <form method="POST" enctype="multipart/form-data">
        <h1>Upload &#119070;</h1>
        {#if form?.success}
            <div class="suc">Track has been successufully uploaded!</div>
        {/if}
        <p><label>
            Name of the song:
            <input type="text" name="track_name" required>
        </label></p>
        <p><label>
            Author of the song:
            <input type="text" name="author" required>
        </label></p>
        <p><label>
            Track cover:
            <input type="file" name="track_cover" accept=".jpg" required>
        </label></p>
        <p><label>
            Audio file:
            <input type="file" name="audio" accept=".mp3" required>
        </label></p>
        <button type="submit">Upload</button>
    </form>
</div>

<style>
    .suc {
        color: #15a350;
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