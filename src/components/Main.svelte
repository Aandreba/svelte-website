<script lang="ts">
    import { lang } from "../global"
</script>

<div id="main">
    <h1>Alex Andreba</h1>
    <h3>{$lang.locale.subtitle}</h3>
</div>

<style>
    #main {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        text-align: center;

        width: 100vw;
        height: 100vh;
    }

    #main h1,h3 {
        flex-basis: 100%;
    }
</style>