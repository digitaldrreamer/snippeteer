<script>
	import { extractMetaDataHtmlFromHtml } from '$lib/utils/helpers';
	import DynamicTab from '$lib/utils/tabController';
	import { afterUpdate, onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	let iframe;

	let canGoBack = false;
	let canGoFront = false;

	let newTab;

	function createNewTab() {
		try {
			newTab = new DynamicTab();
			newTab.openNewTab();
		} catch (err) {
			toast.error(err.message);
			return;
		}
		newTab.updateNewTabContent('', htmlContent);
	}

	function syncHistoryWithButtons() {
		const iframeWindow = iframe.contentWindow;
		const historyLength = iframeWindow.history.length;

		// Assume that the iframe starts at the first history entry (index 0)
		let currentIndex = iframeWindow.history.state || 0; // Some browsers don't track current index

		// Disable back button if can't go back
		canGoBack = !(currentIndex === 0);

		// Disable forward button if can't go forward
		canGoFront = !(currentIndex >= historyLength - 1);
	}

	// Function to navigate back in iframe history
	function goBack() {
		const iframeWindow = iframe.contentWindow;
		if (iframeWindow.history.length > 1) {
			iframeWindow.history.back();
		}
	}

	// Function to navigate forward in iframe history
	function goForward() {
		const iframeWindow = iframe.contentWindow;
		iframeWindow.history.forward();
	}

	// Function to reload the iframe
	function reloadIframe() {
		iframe.contentWindow.location.reload();
	}

	onMount(() => {
		syncHistoryWithButtons();
	});

	afterUpdate(() => {
		syncHistoryWithButtons();
	});

	let defaultHTML = `
	:root {
  --background-light: hsl(0, 0%, 96%); /* Neutral 100 */
  --background-dark: hsl(0, 0%, 13%);  /* Neutral 800 */
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(240, 10%, 3.9%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(240, 10%, 3.9%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(240, 10%, 3.9%);
  --primary: hsl(240, 5.9%, 10%);
  --primary-foreground: hsl(0, 0%, 98%);
  --secondary: hsl(240, 4.8%, 95.9%);
  --secondary-foreground: hsl(240, 5.9%, 10%);
  --muted: hsl(240, 4.8%, 95.9%);
  --muted-foreground: hsl(240, 3.8%, 45%);
  --accent: hsl(240, 4.8%, 95.9%);
  --accent-foreground: hsl(240, 5.9%, 10%);
  --destructive: hsl(0, 72%, 51%);
  --destructive-foreground: hsl(0, 0%, 98%);
  --border: hsl(240, 5.9%, 90%);
  --input: hsl(240, 5.9%, 90%);
  --ring: hsl(240, 5.9%, 10%);
  --chart-1: hsl(173, 58%, 39%);
  --chart-2: hsl(12, 76%, 61%);
  --chart-3: hsl(197, 37%, 24%);
  --chart-4: hsl(43, 74%, 66%);
  --chart-5: hsl(27, 87%, 67%);
  --radius: 0.5rem;
}

body {
  background-color: var(--background-light);
  transition: background-color 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--background-dark);
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  --font-sans-serif: 'Inter';
}

body {
  font-family: 'Inter', sans-serif;
  --font-sans-serif: 'Inter';
}

.flex {
  display: flex;
}

.min-h-[100dvh] {
  min-height: 100vh;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-background {
  background-color: var(--background);
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.text-center {
  text-align: center;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: bold;
}

.text-muted-foreground {
  color: var(--muted-foreground);
}
  <div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background">
  <div class="space-y-2 text-center">
    <h2 class="text-2xl font-bold">Write some HTML code first</h2>
    <p class="text-muted-foreground">To see a preview, please provide some HTML code.</p>
  </div>
</div>
`;
	export let htmlContent = defaultHTML;
	let metadata = extractMetaDataHtmlFromHtml(htmlContent);
</script>

<div
	class="box-border flex min-h-screen w-full flex-col rounded-md bg-neutral-100 dark:bg-neutral-800"
>
	<header class="flex items-center gap-2 border-b bg-neutral-100 px-4 py-2 dark:bg-neutral-800">
		<div class="flex items-center gap-2">
			<button
				disabled={!canGoBack}
				on:click={() => goBack()}
				class="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5 text-muted-foreground"
				>
					<path d="m15 18-6-6 6-6"></path>
				</svg>
				<span class="sr-only">Back</span>
			</button>
			<button
				on:click={() => reloadIframe()}
				class="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5 text-muted-foreground"
				>
					<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
					<path d="M3 3v5h5"></path>
					<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
					<path d="M16 16h5v5"></path>
				</svg>
				<span class="sr-only">Reload</span>
			</button>
			<button
				disabled={!canGoFront}
				on:click={() => goForward()}
				class="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-5 w-5 text-muted-foreground"
				>
					<path d="m9 18 6-6-6-6"></path>
				</svg>
				<span class="sr-only">Forward</span>
			</button>
		</div>
		<div class="ml-auto flex-1">
			<div class="relative">
				<input
					class="flex h-10 w-full rounded-full border border-input bg-muted px-3 py-2 pl-8 pr-12 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
					placeholder="Search or enter a URL"
					type="search"
				/>
				<button
					class="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5 text-muted-foreground"
					>
						<path d="M15 3h6v6"></path>
						<path d="M10 14 21 3"></path>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
					</svg>
					<span class="sr-only">Open in new tab</span>
				</button>
			</div>
		</div>
	</header>
	<main class="no-scrollbar h-full w-full overflow-scroll">
		<iframe
			bind:this={iframe}
			loading="lazy"
			srcdoc={htmlContent.length === 0 ? defaultHTML : htmlContent}
			style="width:100%; height:100%; background-color: #ffffff;"
			title="Tokyo 2021 Highlights: Day Two"
			sandbox="allow-scripts allow-same-origin"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</main>
</div>
