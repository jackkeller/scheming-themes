<script>
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	const pathArray = ['', 'getting-started', 'dark-mode', 'extending'];
	/**
	 * @type {{ label: string; path: string | null; }[]}
	 */
	let paths = [],
		currentPage = '';

	$: {
		const currentPathname = $page.url.pathname.replace(/^\//, ''); // Remove leading slash
		const currentIndex = pathArray.indexOf(currentPathname);

		if (currentIndex !== -1) {
			const previousPath = currentIndex > 0 ? pathArray[currentIndex - 1] : null;
			const nextPath = currentIndex < pathArray.length - 1 ? pathArray[currentIndex + 1] : null;

			paths = [
				{
					label: previousPath !== null ? `${previousPath}` : '',
					path: previousPath !== null && previousPath !== '' ? `/${previousPath}` : '/'
				},
				{ label: nextPath ? `${nextPath}` : '', path: nextPath ? `/${nextPath}` : null }
			];
		}
	}

	$: {
		currentPage = $page.url.pathname.replace(/^\//, '');
	}
</script>

<svelte:head>
	<title>Scheming & Theming</title>
</svelte:head>

<Header />

<main class="relative">
	<div class="container">
		<slot></slot>
	</div>
</main>

<Footer currentPage={currentPage ? currentPage : 'home'} {paths} />
