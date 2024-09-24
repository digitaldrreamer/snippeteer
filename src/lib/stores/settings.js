import { persisted } from 'svelte-persisted-store'

export const settings = persisted('settings', {
    editorTheme: {
        light: 0,
        dark: 1,
        default: 0,
        useDefault: true
    },
    skipThemeChangeReminder: false,
    temp: {
        html: '',
        css: '',
        js: '',
        libs: {
            tailwind: false,
            bootstrap: false,
            foundation: false,
            css_skeletons: false,
            bulma: false
        }
    },
    defaultLibs: {
        css: [],
        js: []
    },
    metaTags: {
        addViewport: true
    }
})