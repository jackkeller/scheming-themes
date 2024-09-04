<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Scheming & Theming</title>
</svelte:head>

<Header />

<main>
	<div class="container">
		<slot></slot>
	</div>
</main>

<Footer />
