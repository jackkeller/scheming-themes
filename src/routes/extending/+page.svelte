<script>
	import Highlight from 'svelte-highlight';
	import { css } from 'svelte-highlight/languages';
	import 'svelte-highlight/styles/github-dark.css';

	import { useBodyClass } from '$actions/useBodyClass';
	const className = 'extending';

	const extendingCode = `.extending {
	--branding: lch(from var(--folly) calc(l + 20) calc(c - 10) h);
	--on-branding: var(--eerie-black);
}`;
</script>

<div class="hidden" use:useBodyClass={className}></div>

<h1>Extending</h1>

<Highlight language={css} code={extendingCode} />
