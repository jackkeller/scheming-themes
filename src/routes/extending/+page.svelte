<script>
	import Highlight from 'svelte-highlight';
	import { css } from 'svelte-highlight/languages';
	import 'svelte-highlight/styles/github-dark.css';

	import { useBodyClass } from '$actions/useBodyClass';
	const className = 'extending';

	const extendingCode = `.extending {
	--background: var(--battleship-gray);
	--on-background: var(--mint-cream);
	--branding: var(--folly);
	--on-branding: var(--eerie-black);
}`;
</script>

<div class="hidden" use:useBodyClass={className}></div>

<h1>Extending</h1>

<p>
	Here you will see that I have extended the properties to something completely different, maybe you
	have different categories you want represented with alternate themes entirely.
</p>

<Highlight language={css} code={extendingCode} />
