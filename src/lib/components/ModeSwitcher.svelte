<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toast } from 'svelte-sonner';
	import { settings } from '$lib/stores/settings';

	import { resetMode, setMode, mode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	const checkTheme = () => {
		let darkThemes = [1, 3, 5, 6, 8, 11, 12, 13, 15, 16, 18];
		if (
			$mode === 'dark' &&
			$settings.editorTheme.useDefault &&
			!darkThemes.includes($settings.editorTheme.default)
		) {
			toast.info('Change your editor theme to dark mode too?', {
				action: {
					label: 'Switch',
					onClick: () => {}
				},
				duration: Number.POSITIVE_INFINITY
			});
		}

		if (
			$mode === 'light' &&
			$settings.editorTheme.useDefault &&
			darkThemes.includes($settings.editorTheme.default)
		) {
			toast.info('Change your editor theme to light mode too?', {
				action: {
					label: 'Switch',
					onClick: () => {}
				},
				duration: Number.POSITIVE_INFINITY
			});
		}

		if (
			$mode === 'dark' &&
			!$settings.editorTheme.useDefault &&
			!darkThemes.includes($settings.editorTheme.dark)
		) {
			toast.info('Change your editor theme to dark mode too?', {
				action: {
					label: 'Switch',
					onClick: () => {}
				},
				duration: Number.POSITIVE_INFINITY
			});
		}

		if (
			$mode === 'light' &&
			!$settings.editorTheme.useDefault &&
			darkThemes.includes($settings.editorTheme.light)
		) {
			toast.info('Change your editor theme to light mode too?', {
				action: {
					label: 'Switch',
					onClick: () => {}
				},
				duration: Number.POSITIVE_INFINITY
			});
		}
	};
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			class="border-primary-700 text-primary-700 dark:border-primary-500 dark:text-primary-500"
			variant="outline"
			size="icon"
		>
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="bg-gray-200 dark:bg-gray-900">
		<DropdownMenu.Item
			class="hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
			on:click={() => setMode('light')}>Light</DropdownMenu.Item
		>
		<DropdownMenu.Item
			class="hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
			on:click={() => setMode('dark')}>Dark</DropdownMenu.Item
		>
		<DropdownMenu.Item
			class="hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
			on:click={() => resetMode()}>System</DropdownMenu.Item
		>
	</DropdownMenu.Content>
</DropdownMenu.Root>
