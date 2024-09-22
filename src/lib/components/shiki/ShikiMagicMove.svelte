<script>
	// Import the necessary functions and components
	import { codeToKeyedTokens, createMagicMoveMachine } from 'shiki-magic-move/core';
	import ShikiMagicMoveRenderer from './ShikiMagicMoveRenderer.svelte';

	/** @typedef {Object} ShikiMagicMoveProps
	 *  @property {Object} highlighter - The highlighter object
	 *  @property {string} lang - Language for syntax highlighting
	 *  @property {string} theme - Theme for syntax highlighting
	 *  @property {string} code - The code to highlight
	 *  @property {Object} options - Additional options for the renderer
	 *  @property {Function} onStart - Callback when animation starts
	 *  @property {Function} onEnd - Callback when animation ends
	 */

	// Replace $props() with individual prop exports
	export let highlighter;
	export let lang;
	export let theme;
	export let code;
	export let options;
	export let onStart;
	export let onEnd;

	// Create the machine using props
	const machine = createMagicMoveMachine(
		(code) =>
			codeToKeyedTokens(highlighter, code, {
				lang: lang,
				theme: theme
			}),
		options
	);

	let result;

	// Reactively derive the result from machine.commit()
	$: result = machine.commit(code);
</script>

<!-- Render the ShikiMagicMoveRenderer component -->
<ShikiMagicMoveRenderer
	animate={true}
	tokens={result.current}
	previous={result.previous}
	{options}
	{onStart}
	{onEnd}
/>
