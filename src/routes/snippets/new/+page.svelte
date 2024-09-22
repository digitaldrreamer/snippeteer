<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="underline">
	<TabItem open>
		<div slot="title" class="flex items-center gap-2">
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
				alt="html logo"
			/>
			HTML5
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Profile:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
				alt="css3 logo"
			/>
			CSS3
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Dashboard:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
				alt="javscript"
			/>
			JS
		</div>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Settings:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>

<!-- 
            TS <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            Tailwind <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />
            Bootstrap <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
           -->
