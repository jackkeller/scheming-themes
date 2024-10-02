<h1>Welcome!</h1>

<p>Let's talk about scheming and theming best practices.</p>

<p class="hidden">
	Whether you use a framework like <a href="https://tailwindcss.com" target="_offsite"
		>TailwindCSS</a
	>, <a href="https://open-props.style/" target="_offsite">Open Props</a>, or roll your own solution
	using CSS variables and utility classes, here are some tips to help you create a visually
	appealing and accessible.
</p>

<p>
	There are a few schools of thought on color schemes, let's look at light and dark mode, though
	some concepts will also work for completely alternate themes like <a
		href="https://joyofcode.xyz/"
		target="_offsite">joyofcode.xyz</a
	>.
</p>

<h3>A few different approaches</h3>

<ol>
	<li>
		<em>Using a light.css and dark.css</em><br /><strong>Advantage</strong>: works everywhere, easy
		to understand<br /><strong>Disadvantage</strong>: managing multiple css files when a change is
		needed
	</li>
	<li>
		<em
			>Using CSS features like <a
				href="https://drafts.csswg.org/css-color-5/#light-dark"
				target="_offsite">light-dark</a
			><sup>1</sup></em
		><br />
		<strong>Advantage</strong>: widely supported css function, relatively easy to manage
		<br /><strong>Disadvantage</strong>: few, may result in more keystrokes during development
	</li>
	<li>
		<em>Using CSS custom properties (variables)</em><br />
		<strong>Advantage</strong>: reusable, easy to manage, can be easily overridden<br />
		<strong>Disadvantage</strong>: if you need to support IE 11 (or opera mini), you will want to
		supply fallback properties
	</li>
</ol>

<blockquote class="absolute bottom-4 italic">
	1. if you want to see a simple example of light-dark you can use this <a
		href="https://codepen.io/itsfreshmade/pen/zYQqNvv"
		target="_offsite">codepen</a
	>.
</blockquote>
