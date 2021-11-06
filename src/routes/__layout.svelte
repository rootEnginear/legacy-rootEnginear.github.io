<script>
	import 'styles/fonts.css';
	import 'styles/main.scss';

	import { dev } from '$app/env';
	import { onMount } from 'svelte';
	import AppNavbar from 'components/AppNavbar.svelte';
	import AppGoTop from 'components/AppGoTop.svelte';
	import AppFooter from 'components/AppFooter.svelte';

	if (!dev) {
		onMount(() => {
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = 1;
				t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', '44j5vcu0d4');
		});
	}
</script>

<div class="container grid-lg">
	<AppNavbar />
	<hr class="mb-2 no-print" />
	<slot />
	<hr class="mt-2 no-print" />
	<AppGoTop />
	<AppFooter />
</div>
