<svelte:head>
    <title>Muzik stuff</title>
</svelte:head>

<script lang="ts">
    export let data;
    import Time from "svelte-time";
</script>

<div class="music-section">
    {#each data.response.reverse() as t}
        <div class="track-entry">
            <span class="user">
                {t.userInfo?.username}
            </span>
            <span class="uploaded-at">
                &#8226 at
                <Time timestamp={t.meta.uploaded_at} format='H:mm, MMMM D'/>
            </span>
            <div class="track">
                <div class="info">
                    <img class="track-cover" src={t.imgUrl} alt="">
                    <div>
                        <div class="track-name"><a href="/music/{t.meta.id}">{t.meta.name}</a></div>
                        <div  class="track-author">{t.meta.author}</div>
                    </div>
                </div>
                <audio class="audio" controls src={t.audioUrl}></audio>
            </div>
        </div>
    {/each}
</div>

<style>
    .music-section {
        margin: 0 auto;
        width: 1000px;
        font-size: 14px;
    }
    

    .track-entry {
        padding: 15px;
        margin: 20px;
        background-color: #fff;
        border:  1px solid #dce1e6;
        border-radius: 15px;
    }

    .user {
        font-weight: bold;
    }

    .uploaded-at {
        color: #818c99;
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
