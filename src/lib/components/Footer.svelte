<script>
	import Icons from './Icons.svelte';
	/**
	 * @param paths
	 * @type {{ label: string; path: string | null; }[]}
	 */
	export let paths = [];
	export let currentPage = '';
</script>

<footer>
	<div class="flex justify-between fill-white text-xl uppercase">
		{#if paths.length > 0 && paths[0].path !== null}
			<a class="flex content-center" href={paths[0].path}>
				<Icons class={currentPage == 'home' ? 'hidden' : ''} icon="arrow-left" />
				{currentPage == 'home'
					? ''
					: paths[0].label.length
						? paths[0].label.replace('-', ' ')
						: 'home'}
			</a>
		{/if}
		{#if paths.length > 1 && paths[1].path !== null}
			<a class="flex content-center" href={paths[1].path}
				>{paths[1].label.replace('-', ' ')} <Icons icon="arrow-right" /></a
			>
		{/if}
	</div>

	<div class="grid h-12 place-content-center text-sm">
		©️{new Date().getFullYear()} - Very Important Things
	</div>
</footer>
