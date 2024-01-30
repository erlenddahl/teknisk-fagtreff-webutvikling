<script>
    export let count = 0;
</script>

<button class="rounded p-5 text-lg" on:click={() => count++}>
    Clicks: {count}
</button>