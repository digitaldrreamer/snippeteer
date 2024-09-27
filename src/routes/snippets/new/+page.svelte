<script>
	import Editor from '$lib/components/Editor.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { settings } from '$lib/stores/settings.js';
	import { insertCssJsIntoHtml } from '$lib/utils/helpers.js';
	import { Checkbox } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { persisted } from 'svelte-persisted-store';
	import { mode } from 'mode-watcher';
	// src="https://cdn.tailwindcss.com"
	export let data;

	let defaultTheme = 0;

	$: tailwind_config = JSON.parse(tailwind_config_json);

	let tailwind_config_json = `{
    "theme": {
      "extend": {
        "colors": {
            "primary": {
                "50": "#fffdea",
                "100": "#fff7c5",
                "200": "#fff085",
                "300": "#ffe146",
                "400": "#ffcf1b",
                "500": "#ffae00",
                "600": "#e28400",
                "700": "#bb5c02",
                "800": "#984708",
                "900": "#7c3a0b",
                "950": "#481d00"
            },
            "secondary": {
                "50": "#fff1f3",
                "100": "#ffe4e7",
                "200": "#fecdd5",
                "300": "#fca5b4",
                "400": "#fa728c",
                "500": "#f24167",
                "600": "#d11d4d",
                "700": "#bc1445",
                "800": "#9e1341",
                "900": "#87143c",
                "950": "#4b061c"
            }
        }
      }
    }
  }
`;

	const isValidJSON = (str) => {
		try {
			JSON.parse(str);
			return true;
		} catch (e) {
			return false;
		}
	};

	/**
	 * @type {string[]}
	 */
	let cdns = {
		tailwind: `<script src="https://cdn.tailwindcss.com"><\/script>
            <script>
                tailwind.config = ${isValidJSON(tailwind_config_json) ? tailwind_config : {}}
                <\/script>
            `,
		bootstrap: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" crossorigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" \/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" \/>
        `,
		foundation: `<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/css/foundation.min.css"
				crossorigin="anonymous"
			\/>
			<script
				src="https://cdn.jsdelivr.net/npm/foundation-sites@6.8.1/dist/js/foundation.min.js"
				crossorigin="anonymous"
			><\/script>`,
		css_skeleton: `
<link rel="stylesheet" href="https://unpkg.com/css-skeletons@1.0.7/dist/css-skeletons.min.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-skeletons@1.0.7/dist/css-skeletons.min.css"/>`,
		bulma: `<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css"
>`
	};

	$: code = selectedLibs ? insertCssJsIntoHtml(html, css, js, selectedLibs, cdns).trim() : '';

	let html = `
	
	
	
	
	
	
	
	
	
	`;
	let css = `
	
	
	
	
	
	
	
	
	
	`;
	let js = `
	
	
	
	
	
	
	
	
	
	`;

	/**
	 * @type {{
	 * 	tailwind: boolean;
	 * 	bootstrap: boolean;
	 * 	foundation: boolean;
	 * 	css_skeletons: boolean;
	 * 	bulma: boolean;
	 * }}
	 */
	let selectedLibs = {
		tailwind: false,
		bootstrap: false,
		foundation: false,
		css_skeletons: false,
		bulma: false
	};

	onMount(() => {
		html = $settings.temp.html || '';
		css = $settings.temp.css || '';
		js = $settings.temp.js || '';
		selectedLibs.tailwind = $settings.temp.libs.tailwind || false;
		selectedLibs.bootstrap = $settings.temp.libs.bootstrap || false;
		selectedLibs.foundation = $settings.temp.libs.foundation || false;
		selectedLibs.css_skeletons = $settings.temp.libs.css_skeletons || false;
		selectedLibs.bulma = $settings.temp.libs.bulma || false;
		defaultTheme = $settings.editorTheme.useDefault
			? $settings.editorTheme.default
			: $mode === 'light'
				? $settings.editorTheme.light
				: $settings.editorTheme.dark || 0;
	});
</script>

<svelte:head>
	<title>Create a new snippet | Snippeteer - Open-source code-sharing platform</title>
</svelte:head>
<div
	class="block h-[100svh] space-y-4 px-4 py-4 leading-10 sm:grid sm:grid-flow-col sm:grid-rows-3 sm:gap-4 sm:space-y-0"
>
	<div
		class="no-scrollbar block h-[60vh] w-full overflow-scroll rounded-xl bg-neutral-100 p-4 shadow-md shadow-neutral-300 sm:col-span-3 sm:row-span-3 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		<Tabs.Root value="html" class="h-full w-full border border-dashed">
			<Tabs.List
				class="sticky top-0 z-10 grid w-full transition-all {selectedLibs.tailwind
					? 'grid-cols-4'
					: 'grid-cols-3'} space-x-3 bg-slate-200 text-neutral-900 dark:bg-slate-900 dark:text-neutral-400"
			>
				<Tabs.Trigger class="space-x-1 align-middle" value="html">
					<span> HTML5 </span>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
						alt="html logo"
						class="size-4"
					/>
				</Tabs.Trigger>
				<Tabs.Trigger class="space-x-1 align-middle" value="css">
					<span> CSS3 </span>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
						alt="css3 logo"
						class="size-4"
					/>
				</Tabs.Trigger>
				<Tabs.Trigger class="space-x-1 align-middle" value="js">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
						alt="javscript logo"
						class="size-4"
					/>
					<span> JS/TS </span>
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
						alt="typescript logo"
						class="size-4"
					/>
				</Tabs.Trigger>
				{#if selectedLibs.tailwind}
					<Tabs.Trigger class="space-x-1 align-middle" value="tailwind">
						<img
							loading="eager"
							src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
							class="size-4"
							alt="tailwind logo"
						/>
						<span> tailwind.config.js </span>
					</Tabs.Trigger>
				{/if}
			</Tabs.List>
			<Tabs.Content value="html">
				<Editor bind:value={html} lang="html" />
			</Tabs.Content>
			<Tabs.Content value="css">
				<Editor bind:value={css} lang="css" />
			</Tabs.Content>
			<Tabs.Content value="js">
				<Editor bind:value={js} lang="javascript" />
			</Tabs.Content>
			<Tabs.Content value="tailwind">
				<Editor bind:value={tailwind_config_json} lang="json" />
			</Tabs.Content>
		</Tabs.Root>
	</div>
	<div
		class="no-scrollbar block h-[20vh] w-full overflow-scroll rounded-xl bg-neutral-100 p-4 shadow-md shadow-neutral-300 sm:col-span-1 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		<p class="mb-4 font-semibold text-gray-900 dark:text-white">Libraries</p>
		<ul
			class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
		>
			<li><Checkbox class="p-3" bind:checked={selectedLibs.tailwind}>TailwindCSS</Checkbox></li>
			<li><Checkbox class="p-3" bind:checked={selectedLibs.bootstrap}>Bootstrap</Checkbox></li>
			<li><Checkbox class="p-3" bind:checked={selectedLibs.foundation}>Foundation</Checkbox></li>

			<li>
				<Checkbox class="p-3" bind:checked={selectedLibs.css_skeletons}>CSS Skeletons</Checkbox>
			</li>
			<li><Checkbox class="p-3" bind:checked={selectedLibs.bulma}>Bulma</Checkbox></li>

			<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-skeletons@1.0.7/dist/css-skeletons.min.css"/> -->
		</ul>
	</div>
	<div
		class="no-scrollbar box-border block h-[60vh] w-full overflow-scroll rounded-xl bg-neutral-100 shadow-md shadow-neutral-300 sm:col-span-1 sm:row-span-2 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		<Iframe bind:htmlContent={code} />
	</div>
</div>

<!-- 
            TS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            Tailwind <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            Bootstrap <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
           -->
