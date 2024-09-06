<script>
	import Highlight from 'svelte-highlight';
	import css from 'svelte-highlight/languages/css';
	import 'svelte-highlight/styles/github-dark.css';

	const code = `:root { 
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
</script>

<h1>Initial Styling</h1>

<p>
	For your initial styles you want to create css varaibles in your css, you can add them like this:
</p>

<Highlight language={css} {code} />
