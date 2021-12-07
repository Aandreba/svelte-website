<script lang="ts">
    import { lang, LANGS } from "../global"
</script>

<nav>
    <div id="navbar">
        <a href="#main">Alex Andreba</a>
        <a>{$lang.locale.about_me}</a>
        <a>{$lang.locale.projects}</a>
        <a>{$lang.locale.contact}</a>
    </div>
    <select bind:value={$lang}>
        {#each LANGS as val}
            <option value={val}>{val.emoji} {val.name}</option>
        {/each}
    </select>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;

        display: grid;
        grid-template-columns: 4fr 1fr;
        z-index: 1;

        width: 100%;
        height: fit-content;

        background-color: #0a0a0a0a;
        color: #f5f5f5;
    }

    nav #navbar {
        position: relative;
        top: 0;
        left: 0;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    nav #navbar a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #f5f5f5;
    }
</style>