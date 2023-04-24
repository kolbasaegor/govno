<svelte:head>
    <title>My profile</title>
</svelte:head>

<script lang="ts">
    export let data;
    import remove_icon from '$lib/components/r.svg';
</script>

<!-- <div>
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
</div> -->

<div class="my">
    <div class="panel">
        <div>Welcome back <strong>{data.user?.username}</strong> !</div>
        <a class="lol" href="/myprofile/upload">Upload track</a>
        <a class="lol" href="/signout">Sign Out</a>
    </div>
    {#if data.response.length > 0}
        <div class="track-entry">
            Tracks uploaded by you:
            {#each data.response as t}
                <div class="track">
                    <div class="info">
                        <img class="track-cover" src={t.imgUrl} alt="">
                        <div>
                            <div class="track-name"><a href="/music/{t.meta.id}">{t.meta.name}</a></div>
                            <div  class="track-author">{t.meta.author}</div>
                        </div>
                    </div>
                    <audio class="audio" controls src={t.audioUrl}></audio>
                    <a href="music/remove/{t.meta.id}"><img class="remove" src={remove_icon} alt=""></a>
                </div>
            {/each}
        </div>
    {:else}
        <p>Tracks uploaded by you will apear here...</p>
    {/if}
</div>

<style>
    .remove {
        height: 30px;
        margin: auto;
    }

    .remove:hover {
        background-color: rgb(255, 0, 0);
        border-radius: 10px;
    }

    .lol {
        color: #8a8ae9;
    }

    .panel {
        font-size: 28px;
        display: flex;
        justify-content: space-between;
    }

    .my {
        width: 70%;
        margin: 20px auto;
    }

    .track-entry {
        padding: 15px;
        margin: 20px;
        background-color: #fff;
        border:  1px solid #dce1e6;
        border-radius: 15px;
    }

    .track {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .track:hover {
        background-color: #f2f3f5;
        border-radius: 5px;
    }

    .track-cover {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }

    .track-name {
        font-size: 16px;
    }

    .track-author {
        color: #818c99;
    }

    .info {
        display: flex;
        max-width: 300px;
        white-space: nowrap; /* Отменяем перенос текста */
        overflow: hidden; /* Обрезаем содержимое */
        text-overflow:ellipsis; /* Многоточие */
    }

    .audio {
        margin-left: 20px;
        width: 60%;
    }
</style>