<script lang="ts">
	export let href: string = '';
	export let alt: string = '';
</script>

<a {href} target="_blank" rel="nofollow noopener noreferrer">
	<img class="no-print" src="img/external-link.svg" {alt} width="24" height="24" />
	<span class="on-print">({href})</span>
</a>

<style lang="scss">
	@import 'spectre.css/src/_variables';

	a {
		color: $body-font-color;

		> img {
			height: 1rem;
			transform: translateY(0.25rem);
		}

		> span {
			display: none;
			font-size: 0.8em;

			@media print {
				display: initial;
			}
		}
	}
</style>
