<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import Navbar from '$lib/components/Navbar.svelte';
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import { Kbd } from 'flowbite-svelte';

	let bookmarks = false;
	let fullUrls = true;

	const profileRadioValue = 'benoit';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});
</script>

<Navbar />

<Toaster richColors />
<div class=" relative h-full w-full">
	<slot />
	<Menubar.Root class="fixed bottom-5 left-1/2 sm:left-5">
		<Menubar.Menu>
			<Menubar.Trigger>Edit</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Redo <Menubar.Shortcut>⌘Y</Menubar.Shortcut>
				</Menubar.Item>
				<Menubar.Item>
					Save <Menubar.Shortcut>⇧⌘S</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Live Preview</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.CheckboxItem bind:checked={bookmarks}>Reload</Menubar.CheckboxItem>
				<Menubar.Item inset>
					New tab <Menubar.Shortcut>⌘<Kbd>Alt</Kbd>O</Menubar.Shortcut>
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger>Settings</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Separator />
				<Menubar.Item inset>Profile</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item inset>Saved Snippets</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item inset>Switch Theme</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
</div>
