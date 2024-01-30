<script>
    export let data;
</script>

<div class="album">
    <div class="title">{data.title}</div>
    <img src="/covers/{data.art}" alt="Cover art" />
</div>

<style>
    .album {
        width: 150px;
        height: 150px;
        position: relative;
        cursor: pointer;
    }

    .album img {
        width: 150px;
        height: 150px;
    }

    .album .title {
        text-align: center;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        background-color: #00000033;
        color: white;
        padding: 4px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .album:hover .title{
        background-color: #000000aa;
    }
</style>