<script lang="ts">
	import type { ActionData } from "./$types";
    /** @type {import('./$types').ActionData} */
    export let form: ActionData;
</script>

<div>
    <p>Here you can upload music</p>
    {#if form?.success}
        Track has been successufully uploaded!
    {/if}
    <form method="POST" enctype="multipart/form-data">
        <p><label>
            Name of the song:
            <input type="text" name="track_name" required>
        </label></p>
        <p><label>
            Author of the song:
            <input type="text" name="author" required>
        </label></p>
        <p><label>
            Track cover (optional):
            <input type="file" name="track_cover" accept=".jpg" required>
        </label></p>
        <p><label>
            Audio file:
            <input type="file" name="audio" accept=".mp3" required>
        </label></p>
        <button type="submit">Upload</button>
    </form>
</div>