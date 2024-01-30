<script>
    import "../app.css";

    const menu = [
        { path: "/", title: "Start" },
        { path: "/counter", title: "Counter" },
        { path: "/albums", title: "Albums" }
    ];
</script>
  
<div class="bg-gray-800 px-10">
    {#each menu as m}
        <a href={m.path} class="p-6 font-bold text-white no-underline hover:bg-gray-600 inline-block">
            {m.title}
        </a>
    {/each}
</div>

<div class="m-10">
    <slot />
</div>