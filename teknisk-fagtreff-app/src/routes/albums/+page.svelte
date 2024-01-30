<script>
    import { onMount } from "svelte";
    import Album from "./Album.svelte";

    let albums = [];
    let artists = [];

    let selectedArtist = null;

    onMount(async () => {
         const res = await fetch("/api/albums");
         const data = await res.json();
         albums = data.albums;
         artists = data.artists;
    })
</script>

<div class="flex gap-5 mb-10">
    {#each artists as artist}
        <button class="rounded p-2 bg-blue-400 border border-blue-800" on:click={() => selectedArtist = artist}>{artist}</button>
    {/each}
    <button class="rounded p-2 bg-blue-400 border border-blue-800" on:click={() => selectedArtist = null}>Alle</button>
</div>

<div class="flex gap-5 flex-row">
    {#each albums as album}
        {#if selectedArtist == null || selectedArtist == album.artist}
            <Album data={album} />
        {/if}
    {/each}
</div>