<script lang="ts">
    export let data;
    import remove_icon from '$lib/components/remove_icon.svg';
</script>

<div>
    <p>Welcome user {data.user?.username} !</p>
    <a href="/myprofile/upload"><button>Upload a track</button></a>
    <a href="/signout"><button>Sign Out</button></a> <br>

    Track uploaded by you:
    {#each data.response as t}
        <p>
            <a href='/music/remove/{t.meta.id}'><button><img src={remove_icon} alt=""></button></a> <br>
            Track Id: {t.meta.id} <br>
            Track name: <a href="/music/{t.meta.id}">{t.meta.name}</a> <br>
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
        height: 50px;
        width: 50px;
    }
</style>