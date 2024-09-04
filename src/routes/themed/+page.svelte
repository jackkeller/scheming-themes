<script>
	import { useBodyClass } from '$actions/useBodyClass';

	let className = 'themed';
</script>

<div class="hidden" use:useBodyClass={className}></div>

<h1>Themed</h1>

<p>
	Here you will find that the color scheme has slightly shifted based on a class added to the body.
</p>
