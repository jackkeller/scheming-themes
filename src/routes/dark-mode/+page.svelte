<script>
	import Highlight from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import 'svelte-highlight/styles/github-dark.css';
	import { useBodyClass } from '$actions/useBodyClass';

	let className = 'dark';

	const code = `.dark {
	--background: var(--eerie-black);
	--on-background: var(--mint-cream);
	--branding: var(--celtic-blue);
	--on-branding: var(--mint-cream);
	--secondary: var(--eerie-black);
	--on-secondary: var(--mint-cream);
}`;

	const darkCode = `@media (prefers-color-scheme: dark) {
	:root {
		--background: var(--eerie-black);
		--on-background: var(--mint-cream);
		--branding: var(--celtic-blue);
		--on-branding: var(--mint-cream);
		--secondary: var(--eerie-black);
		--on-secondary: var(--mint-cream);
	}
}`;
</script>

<div class="hidden" use:useBodyClass={className}></div>

<h1>Dark Mode</h1>

<p>
	Here you will find that the color scheme has slightly shifted based on a class added to the body.
	This can also be controlled by a users prefered color scheme.
</p>

<Highlight language={css} {code} />

<p>Just like that, we changed the theme to dark mode!</p>

<p>
	You can also just make it automatic with the mediaquery below, however you have to declare the
	colors inside of the `:root` block.
</p>

<Highlight language={css} code={darkCode} />
