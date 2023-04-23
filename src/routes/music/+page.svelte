<script lang="ts">
    export let data;
</script>

<div>
    All tracks:

    {#each data.response as t}
        <p> 
            Track Id: {t.meta.id} <br>
            Track name: <a href="/music/{t.meta.id}">{t.meta.name}</a> <br>
            Author: {t.meta.author} <br>
            Uploaded by: {t.userInfo?.username} <br>
            Uploaded at: {t.meta.uploaded_at} <br>
            Cover: <img src={t.imgUrl} alt=""> <br>
            Listen -> <audio controls src={t.audioUrl}></audio>
        </p>
    {/each}
</div>

<style>
    p {
        background-color: bisque;
        padding: 20px;
    }

    img {
        height: 50px;
        width: 50px;
    }
</style>
