import { writable } from "svelte/store"
import json from "./locale.json"

// INTERFACES
export interface Lang {
    readonly code: string,
    readonly name: string,
    readonly emoji: string
    readonly locale: Locale
}

export interface Locale {
    readonly subtitle: string,
    readonly about_me: string,
    readonly projects: string,
    readonly contact: string
}

// METHODS
function getLocale (code: string) : Locale {
    return {
        subtitle: json["subtitle"][code],
        about_me: json["about_me"][code],
        projects: json["projects"][code],
        contact: json["contact"][code]
    }
}

function initLanguage () : Lang {
    let ls = localStorage.getItem("lang")
    if (ls === null) {
        let nv = navigator.language.split("-")[0]
        let lang = LANGS.find(x => x.code === nv)
        if (lang === undefined) {
            return ENGLISH
        } else {
            localStorage.setItem("lang", nv)
            return lang
        }
    } else {
        return LANGS.find(x => x.code === ls)
    }
}

// LANGS
export const ENGLISH : Lang = {
    code: "en",
    name: "English",
    emoji: "🇬🇧",
    locale: getLocale("en")
}

export const SPANISH : Lang = {
    code: "es",
    name: "Español",
    emoji: "🇪🇸",
    locale: getLocale("es")
}

export const CATALAN : Lang = {
    code: "ca",
    name: "Català",
    emoji: "🇦🇩",
    locale: getLocale("ca")
}

export const LANGS = [ENGLISH, SPANISH, CATALAN]
export const lang = writable(initLanguage())