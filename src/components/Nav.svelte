<script lang="ts">
    import json from "../locale.json";

    export let lang = initLanguage();
    $: locale = LOCALES.find(x => x.lang === lang);

    export const LANGS = ["en", "es", "ca"]
    export const LOCALES = initLocales()

    interface Locale {
        readonly lang: string,
        readonly about_me: string,
        readonly projects: string,
        readonly contact: string
    }

    function initLocales () : Locale[] {
        let array : Locale[] = [];

        for (let i in LANGS) {
            let lang = LANGS[i];
            let locale : Locale = {
                lang: lang,
                about_me: json["about_me"][lang],
                projects: json["projects"][lang],
                contact: json["contact"][lang],
            }

            array.push(locale)
        }

        return array
    }

    function initLanguage () : string {
        let ls = localStorage.getItem("lang")
        if (ls === null) {
            let nv = navigator.language.split("-")[0]
            if (LANGS.includes(nv)) {
                localStorage.setItem("lang", nv)
                return nv
            } else {
                return "en"
            }
        } else {
            return ls
        }
    }
</script>

<nav>
    <div id="navbar">
        <a>Alex Andreba</a>
        <a>{locale.about_me}</a>
        <a>{locale.projects}</a>
        <a>{locale.contact}</a>
    </div>
    <select bind:value={lang}>
        <option value="en">English 🇬🇧</option>
        <option value="es">Español 🇪🇸</option>
        <option value="ca">Català 🇦🇩</option>
    </select>
</nav>

<style lang="scss">
    nav {
        position: fixed;
        top: 0;
        left: 0;

        display: grid;
        grid-template-columns: 4fr 1fr;

        width: 100%;
        height: fit-content;

        background-color: #0a0a0a;
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