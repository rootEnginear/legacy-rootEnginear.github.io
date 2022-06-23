<script>
	import 'styles/fonts.css';
	import 'styles/main.scss';

	import AppNavbar from 'components/AppNavbar.svelte';
	import AppGoTop from 'components/AppGoTop.svelte';
	import AppFooter from 'components/AppFooter.svelte';
</script>

<div class="container grid-lg">
	<AppNavbar />
	<hr class="mb-2 no-print" />
	<slot />
	<hr class="mt-2 no-print" />
	<AppGoTop />
	<AppFooter />
</div>
