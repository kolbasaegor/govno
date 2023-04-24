<svelte:head>
    <title>govno.fm</title>
</svelte:head>

<script lang="ts">
    import l1 from '$lib/components/home1.jpg';
    import l2 from '$lib/components/home2.jpg';
    import l3 from '$lib/components/Rj_KPAJR-dM.jpg';
    import l4 from '$lib/components/baron.png';
</script>

<div>
    <div class="container">
        <img src={l1} alt="">
        <div class="overlay-text"><a href="/music">LISTEN</a></div>
    </div>
    <div class="container">
        <img src={l2} alt="">
        <div class="overlay-text"><a href="/login">JOIN US</a></div>
    </div>
    <div class="container">
        <img src={l3} alt="">
        <div class="overlay-text"><a href="/myprofile/upload">UPLOAD</a></div>
    </div>
    <div class="container">
        <img src={l4} alt="">
        <div class="overlay-text"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">ENJOY</a></div>
    </div>
</div>

<style>
    .container {
    position: relative;
    }

    .container img {
    display: block;
    width: 100%;
    height: auto;
    }

    .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 128px;
    color: white;
    text-align: center;
    }

    a {
        color: #fff;
    }

</style>
