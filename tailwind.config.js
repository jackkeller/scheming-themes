/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				branding: 'var(--branding)',
				'on-branding': 'var(--on-branding)',
				secondary: 'var(--secondary)',
				'on-secondary': 'var(--on-secondary)',
				background: 'var(--background)',
				'on-background': 'var(--on-background)',
      }
		}
	},

	plugins: []
};
