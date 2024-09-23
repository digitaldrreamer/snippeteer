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
		Button
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;

	export let loggedIn = false;
	import { Select, Label } from 'flowbite-svelte';
	import { settings } from '$lib/stores/settings';
	import { goto } from '$app/navigation';
	import { toast } from 'svelte-sonner';
	let selectedTheme = $settings.editorTheme;
	let themes = [
		{ value: 'materialLight', name: 'Material Light' },
		{ value: 'materialDark', name: 'Material Dark' },
		{ value: 'solarizedLight', name: 'Solarized Light' },
		{ value: 'solarizedDark', name: 'Solarized Dark' },
		{ value: 'dracula', name: 'Dracula' },
		{ value: 'githubLight', name: 'Github Light' },
		{ value: 'githubDark', name: 'Github Dark' },
		{ value: 'aura', name: 'Aura' },
		{ value: 'tokyoNight', name: 'Tokyo Night' },
		{ value: 'tokyoNightStorm', name: 'Tokyo Night Storm' },
		{ value: 'tokyoNightDay', name: 'Tokyo Night Day' }
	];

	let showSettings = false;
</script>

<!-- https://i.ibb.co.com/WBnX8dK/snippeteer.png https://i.ibb.co.com/dtCShxW/snippeteer-transparent.png-->

<!-- src="https://i.ibb.co.com/NSvggCj/android-chrome-192x192.png" -->
<!-- ========== HEADER ========== -->
<header
	class="z-50 flex w-full flex-wrap bg-primary-100 py-3 text-sm text-neutral-900 sm:flex-nowrap sm:justify-start sm:py-0 dark:bg-neutral-800 dark:text-neutral-50"
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
						class="mx-2 size-12 p-2"
						alt="snippeteer logo"
					/>
					<span class="font-secondary my-auto block font-light text-primary-950"> SNIPPETEER </span>
				</a>
				<div class="sm:hidden">
					<button
						type="button"
						class="hs-collapse-toggle inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
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
				class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
				aria-labelledby="hs-navbar-basic-usage-collapse"
			>
				<div
					class="mt-5 flex flex-col gap-y-3 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:ps-5"
				>
					<a
						class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none sm:p-2 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
						href="/">Home</a
					>

					<a
						class="font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 focus:outline-none sm:p-2 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
						href="#">Snippets</a
					>

					<Button class="my-2 ml-4">
						Options
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="ms-2 h-6 w-6 text-white dark:text-white"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
						</svg>
					</Button>
					<Dropdown>
						<DropdownItem on:click={() => goto('/snippets/new')}>New Snippet</DropdownItem>
						<DropdownDivider />
						{#if loggedIn}
							<DropdownItem>Profile</DropdownItem>
							<DropdownItem
								disabled
								on:click={() => {
									toast.info('Unavailable for now');
									// (showSettings = !showSettings)
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
		<div class="mx-auto mt-8">
			<Label>
				Select an option
				<Select
					on:change={(e) => {
						$settings.defaultLibs = e.target.value;
					}}
					class="mt-2"
					items={themes}
					bind:value={selectedTheme}
				/>
			</Label>
		</div>
	</Sheet.Content>
</Sheet.Root>
