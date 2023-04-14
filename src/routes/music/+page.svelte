<script>
    export let data;
    let { guys } = data;
</script>

<div>
    нормальын ребята:
    <ul>
        {#each guys as g}
            <li>{g.name}</li>
        {/each}
    </ul>
</div>
