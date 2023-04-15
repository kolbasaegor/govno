<script>
  export let data;
</script>

<div>
  {#if data.response}
    <p>Id: {data.response.person.id}</p>
    <p>Name: {data.response.person.name}</p>
    <p>Created at: {data.response.person.created_at}</p>
    <p>Profile pic:
      <img src={data.response.imgUrl.publicUrl} alt="">
    </p>
    <p>Audio: <audio controls src={data.response.audioUrl.publicUrl}></audio></p>
  {:else}
    <p>такоего нет сории</p>
  {/if}
</div>

<style>
  img {
    height: 400px;
    width: 400px;
  }
</style>