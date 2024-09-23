import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['@ddietr/codemirror-themes'],
		exclude: ["svelte-codemirror-editor", "codemirror", "@codemirror/language-javascript" /* ... */],
	},
});
