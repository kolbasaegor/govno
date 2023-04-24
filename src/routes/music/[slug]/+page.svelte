<script lang="ts">
  export let data;
  let t = data.response?.track;
  let u = data.response?.user;
</script>

<svelte:head>
    <title>{t?.name}</title>
</svelte:head>

<div class="music-section">
      <div class="track-entry">
          <div class="track">
                <img class="track-cover" src={t?.imgUrl} alt="">
                <div class="info">
                    <div class="track-name">{t?.name}</div>
                    <div  class="track-author">By {t?.author}</div>
                    <audio class="audio" controls src={t?.audioUrl}></audio>
                    <div>Uploaded by {u?.username}</div>
                </div>
          </div>
      </div>
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

    .track {
        display: flex;
        padding: 10px;
        flex-wrap: wrap;
    }

    .track-cover {
        margin-right: 10px;
        width: 300px;
        height: 300px;
        border-radius: 10px;
    }

    .track-name {
        font-size: 32px;
    }

    .track-author {
        color: #818c99;
        font-size: 18px;
    }

    .info {
      margin-left: 15px;
    }
    .audio {
        width: 500px;
    }
</style>