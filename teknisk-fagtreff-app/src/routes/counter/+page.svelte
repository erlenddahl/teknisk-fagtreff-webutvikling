<script>
    import Counter from "./Counter.svelte";

    let commonCount = 0;
</script>

<Counter />
<Counter count={10} />
<Counter />
<Counter bind:count={commonCount} />
<Counter bind:count={commonCount} />