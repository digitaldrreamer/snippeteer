<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Button,
		Checkbox
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { Switch } from '$lib/components/ui/switch/index.js';
	$: activeUrl = $page.url.pathname;

	export let loggedIn = false;
	import { Select, Label } from 'flowbite-svelte';
	import { settings } from '$lib/stores/settings';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
	import ModeSwitcher from './ModeSwitcher.svelte';
	import { mode } from 'mode-watcher'
	let selectedTheme = $settings.editorTheme.useDefault ? $settings.editorTheme.default : $mode === "light" ? $settings.editorTheme.light : $settings.editorTheme.dark;
	let themes = [
		{ value: 0, name: 'Basic Light (Light)' },
		{ value: 1, name: 'Basic Dark (Dark)' },
		{ value: 2, name: 'Abcdef (Light)' },
		{ value: 3, name: 'Abyss (Dark)' },
		{ value: 4, name: 'Android Studio (Light)' },
		{ value: 5, name: 'Andromeda (Dark)' },
		{ value: 6, name: 'Forest (Dark)' },
		{ value: 7, name: 'Github Light (Light)' },
		{ value: 8, name: 'Github Dark (Dark)' },
		{ value: 9, name: 'Gruvbox Light (Light)' },
		{ value: 10, name: 'Material Light (Light)' },
		{ value: 11, name: 'Material Dark (Dark)' },
		{ value: 12, name: 'Monokai (Dark)' },
		{ value: 13, name: 'Nord (Dark)' },
		{ value: 14, name: 'Solarized Light (Light)' },
		{ value: 15, name: 'Solarized Dark (Dark)' },
		{ value: 16, name: 'Tokyo Night Storm (Dark)' },
		{ value: 17, name: 'Tokyo Night Day (Light)' },
		{ value: 18, name: 'Volcano (Dark)' }
	];

	let showSettings = false;
</script>

<!-- https://i.ibb.co.com/WBnX8dK/snippeteer.png https://i.ibb.co.com/dtCShxW/snippeteer-transparent.png-->

<!-- src="https://i.ibb.co.com/NSvggCj/android-chrome-192x192.png" -->
<!-- ========== HEADER ========== -->
<header
	class="z-50 flex flex-wrap w-full py-3 text-sm bg-primary-100 text-neutral-900 sm:flex-nowrap sm:justify-start sm:py-0 dark:bg-neutral-800 dark:text-neutral-50"
>
	<nav class="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-8">
		<div class="relative sm:flex sm:items-center">
			<div class="flex items-center justify-between">
				<a
					class="flex text-xl font-semibold text-black focus:opacity-80 focus:outline-none dark:text-white"
					href="/"
					aria-label="Snippeteer"
				>
					<img
						src="https://i.ibb.co.com/NSvggCj/android-chrome-192x192.png"
						class="p-2 mx-2 size-12"
						alt="snippeteer logo"
					/>
					<span
						class="block my-auto font-light font-secondary text-primary-950 dark:text-primary-500"
					>
						SNIPPETEER
					</span>
				</a>
				<div class="sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 text-gray-800 bg-white border border-gray-200 rounded-lg shadow-sm hs-collapse-toggle gap-x-2 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
						id="hs-navbar-basic-usage-collapse"
						aria-expanded="false"
						aria-controls="hs-navbar-basic-usage"
						aria-label="Toggle navigation"
						data-hs-collapse="#hs-navbar-basic-usage"
					>
						<svg
							class="size-4 shrink-0 hs-collapse-open:hidden"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line
								x1="3"
								x2="21"
								y1="18"
								y2="18"
							/></svg
						>
						<svg
							class="hidden size-4 shrink-0 hs-collapse-open:block"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
						>
					</button>
				</div>
			</div>

			<div
				id="hs-navbar-basic-usage"
				class="hidden overflow-hidden transition-all duration-300 hs-collapse grow basis-full sm:block"
				aria-labelledby="hs-navbar-basic-usage-collapse"
			>
				<div
					class="flex flex-col mt-5 gap-y-3 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:ps-5"
				>
					<a
						class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none sm:p-2 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
						href="/">Home</a
					>

					<a
						class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none sm:p-2 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
						href="/snippets">Snippets</a
					>

					<Button class="px-4 py-1 my-2 ml-4">
						More
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 text-white ms-2 dark:text-white"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
						</svg>
					</Button>
					<Dropdown>
						<DropdownItem on:click={() => goto('/snippets/new')}>New Snippet</DropdownItem>
						<DropdownDivider />
						{#if loggedIn}
							<DropdownItem>Profile</DropdownItem>
							<!-- disabled -->
							<DropdownItem
								on:click={() => {
									toast.info('Unavailable for now');
									showSettings = !showSettings;
								}}>Settings</DropdownItem
							>
							<DropdownDivider />
							<DropdownItem>Sign out</DropdownItem>
						{:else}
							<DropdownItem on:click={() => (showSettings = !showSettings)}>Settings</DropdownItem>
							<DropdownItem>Sign Up</DropdownItem>
							<DropdownItem>Log In</DropdownItem>
						{/if}
					</Dropdown>
				</div>
			</div>
		</div>
	</nav>
</header>
<!-- ========== END HEADER ========== -->

<Sheet.Root bind:open={showSettings}>
	<Sheet.Content class="bg-primary-700/30 backdrop-blur-lg">
		<Sheet.Header>
			<Sheet.Title>Snippeteer Settings</Sheet.Title>
			<Sheet.Description>Change settings across Snippeteer</Sheet.Description>
		</Sheet.Header>
		<div class="mx-auto mt-8 space-y-4">
			{#if $settings.editorTheme.useDefault}
				<Label>
					Editor Theme
					<Select
						on:change={(e) => {
							$settings.editorTheme.default = e.target.value;
						}}
						class="mt-2"
						items={themes}
						bind:value={$settings.editorTheme.default}
					/>
				</Label>
			{/if}

			<Label>
				Use same theme for all modes
				<Switch id="useDefault" bind:checked={$settings.editorTheme.useDefault} />
			</Label>

			{#if !$settings.editorTheme.useDefault}
				<Label>
					Editor Theme (Light)
					<Select
						on:change={(e) => {
							$settings.editorTheme.light = e.target.value;
						}}
						class="mt-2"
						items={themes}
						bind:value={$settings.editorTheme.light}
					/>
				</Label>

				<Label>
					Editor (Dark)
					<Select
						on:change={(e) => {
							$settings.editorTheme.dark = e.target.value;
						}}
						class="mt-2"
						items={themes}
						bind:value={$settings.editorTheme.light}
					/>
				</Label>
			{/if}
			<Label>
				Switch Site Theme
				<ModeSwitcher />
			</Label>

			<p class="mb-4 font-semibold text-gray-900 dark:text-white">Select these Libraries</p>
			<ul
				class="w-48 bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"
			>
				<li>
					<Checkbox class="p-3" bind:checked={$settings.temp.libs.tailwind}>TailwindCSS</Checkbox>
				</li>
				<li>
					<Checkbox class="p-3" bind:checked={$settings.temp.libs.bootstrap}>Bootstrap</Checkbox>
				</li>
				<li>
					<Checkbox class="p-3" bind:checked={$settings.temp.libs.foundation}>Foundation</Checkbox>
				</li>
				<li>
					<Checkbox class="p-3" bind:checked={$settings.temp.libs.css_skeletons}
						>CSS Skeletons</Checkbox
					>
				</li>
				<li><Checkbox class="p-3" bind:checked={$settings.temp.libs.bulma}>Bulma</Checkbox></li>

				<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/css-skeletons@1.0.7/dist/css-skeletons.min.css"/> -->
			</ul>

			<Label>
				Add meta viewport to code preview automatically
				<Checkbox class="p-3" bind:checked={$settings.metaTags.addViewport}
					>Add Viewport Tag</Checkbox
				></Label
			>
		</div>
	</Sheet.Content>
</Sheet.Root>
