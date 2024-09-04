<script>
	import Highlight from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import 'svelte-highlight/styles/github-dark.css';

	const code = `:root { 
	--primary-color: black;
}`;
</script>

<h1>Initial Styling</h1>

<p>
	For your initial styles you want to create css varaibles in your css, you can add them like this:
</p>

<Highlight language={css} {code} />
