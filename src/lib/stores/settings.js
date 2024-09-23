import { persisted } from 'svelte-persisted-store'

export const settings = persisted('settings', {
    editorTheme: 'githubLight',
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
    }
})