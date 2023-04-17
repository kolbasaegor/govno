<script>
    export let data;
</script>

<div>
    All tracks:

    {#each data.response as t}
        <p>
            Track Id: {t.meta.id} <br>
            Track name: {t.meta.name} <br>
            Author: {t.meta.author} <br>
            Uploaded by: {t.userInfo.username} <br>
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
        height: 200px;
        width: 200px;
    }
</style>
