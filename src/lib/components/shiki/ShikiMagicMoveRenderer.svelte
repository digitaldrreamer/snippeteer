<script>
	// Import the MagicMoveRenderer directly without type annotations
	import { MagicMoveRenderer } from 'shiki-magic-move/renderer';

	/** @typedef {Object} ShikiMagicMoveRendererProps
	 *  @property {Object} options - Renderer options
	 *  @property {boolean} animate - Whether to animate transitions
	 *  @property {Array} tokens - Tokens to render
	 *  @property {Array} previous - Previous tokens for animation comparison
	 *  @property {Function} onStart - Callback for animation start
	 *  @property {Function} onEnd - Callback for animation end
	 */

	// Replace Svelte 5's $props() with the props passed through Svelte 4's "export let"
	export let options;
	export let animate;
	export let tokens;
	export let previous;
	export let onStart;
	export let onEnd;

	// Define variables
	let container;
	let renderer;
	let isMounted = false;

	// Svelte 4's lifecycle hooks: onMount and reactive statements
	import { onMount } from 'svelte';

	onMount(() => {
		// Initialize the renderer when the component is mounted
		if (!container) return;
		container.innerHTML = '';
		isMounted = true;
		renderer = new MagicMoveRenderer(container);

		// Call render whenever necessary
		render();
	});

	// Create a reactive statement that listens for changes to the props
	$: render = async () => {
		if (!renderer) return;
		Object.assign(renderer.options, options);
		if (animate) {
			if (previous) renderer.replace(previous);
			onStart?.();
			await renderer.render(tokens);
			onEnd?.();
		} else {
			renderer.replace(tokens);
		}
	};
</script>

<pre bind:this={container} class="shiki-magic-move-container">
  <!-- render initial tokens for SSR -->
  {#if !isMounted}
		{#each tokens.tokens as token}
			{#if token.content === '\n'}
				<br />
			{/if}
			<span class="shiki-magic-move-item">
				{token.content}
			</span>
		{/each}
	{/if}
</pre>
