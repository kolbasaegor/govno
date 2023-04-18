<script>
    export let data;
</script>

<div>
    <p>Welcome user {data.user.id} !</p>
    <a href="/myprofile/upload"><button>Upload a track</button></a>
    <a href="/signout"><button>Sign Out</button></a>
</div>