<script>
	import CodeMirror from 'svelte-codemirror-editor';
	import { javascript } from '@codemirror/lang-javascript';
	import { html } from '@codemirror/lang-html';
	import { css } from '@codemirror/lang-css';
	import { toast } from 'svelte-sonner';
	import { materialLight } from '@ddietr/codemirror-themes/material-light';
	import { materialDark } from '@ddietr/codemirror-themes/material-dark';
	import { solarizedLight } from '@ddietr/codemirror-themes/solarized-light';
	import { solarizedDark } from '@ddietr/codemirror-themes/solarized-dark';
	import { dracula } from '@ddietr/codemirror-themes/dracula';
	import { githubLight } from '@ddietr/codemirror-themes/github-light';
	import { githubDark } from '@ddietr/codemirror-themes/github-dark';
	import { aura } from '@ddietr/codemirror-themes/aura';
	import { tokyoNight } from '@ddietr/codemirror-themes/tokyo-night';
	import { tokyoNightStorm } from '@ddietr/codemirror-themes/tokyo-night-storm';
	import { tokyoNightDay } from '@ddietr/codemirror-themes/tokyo-night-day';
	import { settings } from '$lib/stores/settings';

	let themes = [
		materialLight,
		materialDark,
		solarizedLight,
		solarizedDark,
		dracula,
		githubLight,
		githubDark,
		aura,
		tokyoNight,
		tokyoNightStorm,
		tokyoNightDay
	];
	let defTheme = $settings.editorTheme;
	export let theme;

	/**
	 * @type {'html' | 'css' | 'js' | 'javascript'}
	 */
	export let lang = 'html';
	let langs =
		lang === 'html'
			? html()
			: lang === 'css'
				? css()
				: lang === 'js' || lang === 'javascript'
					? javascript()
					: null;
	export let value = '';
</script>

<CodeMirror
	bind:value
	lang={langs}
	on:ready={() => toast.info('Editor Ready')}
	theme={themes[defTheme]}
/>
