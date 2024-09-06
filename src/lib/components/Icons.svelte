<script>
	export let icon;

	let clazz = '';
	export { clazz as class };
</script>

{#if icon == 'arrow-left'}
	<svg
		class="icon -mt-1 h-9 {clazz}"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M14 7l-5 5 5 5V7z" />
	</svg>
{/if}

{#if icon == 'arrow-right'}
	<svg
		class="icon -mt-1 h-9 {clazz}"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M10 17l5-5-5-5v10z" />
	</svg>
{/if}
