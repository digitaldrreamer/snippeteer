<script>
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';

	afterNavigate(() => {
		window.HSStaticMethods.autoInit();
	});
</script>

<Toaster richColors />
<slot />
