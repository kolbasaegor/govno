<script>
    export let data;
</script>

<div>
    <p>Welcome user {data.user.username} !</p>
    <a href="/myprofile/upload"><button>Upload a track</button></a>
    <a href="/signout"><button>Sign Out</button></a> <br>

    Track uploaded by you:
    {#each data.response as t}
        <p>
            Track Id: {t.meta.id} <br>
            Track name: {t.meta.name} <br>
            Author: {t.meta.author} <br>
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