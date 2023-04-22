<script>
  export let data;

  let t = data.response.track;
  let u = data.response.user;
</script>

<div>
  <p>
    Track Id: {t.id} <br>
    Track name: {t.name} <br>
    Author: {t.author} <br>
    Uploaded by: {u.username} <br>
    Uploaded at: {t.uploaded_at} <br>
    Cover: <img src={t.imgUrl} alt=""> <br>
    Listen -> <audio controls src={t.audioUrl}></audio>
  </p>
</div>

<style>
  img {
    height: 50px;
    width: 50px;
  }
</style>