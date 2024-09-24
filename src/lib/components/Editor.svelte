<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { javascript } from '@codemirror/lang-javascript';
	import { html } from '@codemirror/lang-html';
	import { css } from '@codemirror/lang-css';
	import { json } from '@codemirror/lang-json';
	import { toast } from 'svelte-sonner';
	import { basicLight } from '@fsegurai/codemirror-theme-bundle';
	import { basicDark } from '@fsegurai/codemirror-theme-bundle';
	import { abcdef } from '@fsegurai/codemirror-theme-bundle';
	import { abyss } from '@fsegurai/codemirror-theme-bundle';
	import { androidStudio } from '@fsegurai/codemirror-theme-bundle';
	import { forest } from '@fsegurai/codemirror-theme-bundle';
	import { githubLight } from '@fsegurai/codemirror-theme-bundle';
	import { githubDark } from '@fsegurai/codemirror-theme-bundle';
	import { gruvboxLight } from '@fsegurai/codemirror-theme-bundle';
	import { materialLight } from '@fsegurai/codemirror-theme-bundle';
	import { materialDark } from '@fsegurai/codemirror-theme-bundle';
	import { monokai } from '@fsegurai/codemirror-theme-bundle';
	import { nord } from '@fsegurai/codemirror-theme-bundle';
	import { solarizedLight } from '@fsegurai/codemirror-theme-bundle';
	import { solarizedDark } from '@fsegurai/codemirror-theme-bundle';
	import { tokyoNightStorm } from '@fsegurai/codemirror-theme-bundle';
	import { tokyoNightDay } from '@fsegurai/codemirror-theme-bundle';
	import { volcano } from '@fsegurai/codemirror-theme-bundle';
	import { settings } from '$lib/stores/settings';
	import { andromeda } from '@fsegurai/codemirror-theme-bundle';
	import { mode } from 'mode-watcher';

	let themes = [
		basicLight,
		basicDark,
		abcdef,
		abyss,
		androidStudio,
		andromeda,
		forest,
		githubLight,
		githubDark,
		gruvboxLight,
		materialLight,
		materialDark,
		monokai,
		nord,
		solarizedLight,
		solarizedDark,
		tokyoNightStorm,
		tokyoNightDay,
		volcano
	];

	/**
	 * @type {'html' | 'css' | 'js' | 'javascript' | 'json'}
	 */
	export let lang = 'html';
	let langs =
		lang === 'html'
			? html()
			: lang === 'css'
				? css()
				: lang === 'js' || lang === 'javascript'
					? javascript()
					: lang === 'json'
						? json()
						: null;
	export let value = '';
</script>

<CodeMirror
	bind:value
	lang={langs}
	on:ready={() => toast.info('Editor Ready')}
	theme={themes[$mode === 'light' ? $settings.editorTheme.light : $settings.editorTheme.dark]}
	lineWrapping={true}
/>
