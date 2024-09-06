<script>
	import Highlight from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import 'svelte-highlight/styles/github-dark.css';
	import { useBodyClass } from '$actions/useBodyClass';

	let className = 'themed';

	const code = `.themed {
  --branding: var(--folly);
}`;
</script>

<div class="hidden" use:useBodyClass={className}></div>

<h1>Themed</h1>

<p>
	Here you will find that the color scheme has slightly shifted based on a class added to the body.
</p>

<Highlight language={css} {code} />

<p>Just like that, we changed the color of the header!</p>
