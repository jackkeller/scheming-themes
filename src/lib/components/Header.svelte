<script>
	import { page } from '$app/stores';

	const menuItems = [
		{ label: 'Getting Started', href: '/getting-started' },
		{ label: 'Dark Mode', href: '/dark-mode' },
		{ label: 'Extending', href: '/extending' }
	];

	/**
	 * @type {string}
	 */
	let currentMenuItem;
	$: currentMenuItem = $page.url.pathname;
</script>

<header class="grid h-16 items-center">
	<div class="container flex justify-between">
		<div><a class="text-2xl" href="/">Scheming & Theming</a></div>
		<nav>
			<ul class="flex gap-2">
				{#each menuItems as item (item.label)}
					<li class:active={currentMenuItem === item.href}>
						<a class="uppercase" href={item.href}>{item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.active {
		@apply font-bold;
	}
</style>
