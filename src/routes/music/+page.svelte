<script>
    export let data;
    let { guys } = data;
</script>

<div>
    нормальын ребята:
    <ul>
        {#each guys as g}
            <li><a href="/music/{g.id}">{g.name}</a></li>
        {/each}
    </ul>
</div>
