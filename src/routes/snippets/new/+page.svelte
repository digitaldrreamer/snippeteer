<script>
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<div
	class="block h-[100svh] space-y-4 px-4 py-4 leading-10 sm:grid sm:grid-flow-col sm:grid-rows-3 sm:gap-4 sm:space-y-0"
>
	<div
		class="block h-[60vh] w-full rounded-xl bg-neutral-100 p-4 shadow-md shadow-neutral-300 sm:col-span-3 sm:row-span-3 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		<Tabs.Root value="html" class="h-full w-full border border-dashed">
			<Tabs.List
				class="grid w-full grid-cols-3 space-x-3 bg-slate-200 text-neutral-900 dark:bg-slate-900"
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
			</Tabs.List>
			<Tabs.Content value="html">Make changes to your account here.</Tabs.Content>
			<Tabs.Content value="css">Change your password here.</Tabs.Content>
			<Tabs.Content value="js">Make changes to your account here.</Tabs.Content>
		</Tabs.Root>
	</div>
	<div
		class="block h-[20vh] w-full rounded-xl bg-neutral-100 p-4 shadow-md shadow-neutral-300 sm:col-span-1 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		&nbsp;
	</div>
	<div
		class="block h-[60vh] w-full rounded-xl bg-neutral-100 p-4 shadow-md shadow-neutral-300 sm:col-span-1 sm:row-span-2 sm:h-auto dark:bg-neutral-800 dark:shadow-neutral-900"
	>
		&nbsp;
	</div>
</div>

<!-- 
            TS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            Tailwind <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            Bootstrap <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
           -->
