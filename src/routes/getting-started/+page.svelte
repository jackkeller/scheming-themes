<script>
	import Highlight from 'svelte-highlight';
	import { css } from 'svelte-highlight/languages';
	import 'svelte-highlight/styles/github-dark.css';

	const initialCode = `:root { 
  /* named colors (personal preference) */
  --battleship-gray: #858786;
  --celtic-blue: #276fbf;
  --eerie-black: #262626;
  --folly: #ff495c;
  --mint-cream: #f1fffa;

  --background: var(--mint-cream);
  --on-background: var(--eerie-black);
  --branding: var(--celtic-blue);
  --on-branding: var(--mint-cream);
  --secondary: var(--eerie-black);
  --on-secondary: var(--mint-cream);
}`;

	const primaryCode = `:root { 
  --primary: var(--celtic-blue);
  --on-primary: var(--mint-cream);
  --secondary: var(--mint-cream);
  --on-secondary: var(--eerie-black);
  --tertiary: var(--eerie-black);
  --on-tertiary: var(--mint-cream);
}`;
</script>

<h1>Getting Started</h1>

<p>
	There are a few ways to address themes and schemes for the web, I'm going to go over using custom
	properties (css variables).
</p>

<Highlight language={css} code={initialCode} />

<h2>Other Approaches</h2>

<p>
	Naming variables things like `primary`, `secondary`, and so on can be another approach. I feel
	like either makes sense but just stick to something once you've nailed it down.
</p>

<Highlight language={css} code={primaryCode} />
