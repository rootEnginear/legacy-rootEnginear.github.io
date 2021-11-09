<script lang="ts">
	export let href: string = '';
	export let noIcon: boolean = false;
</script>

<a {href} target="_blank" rel="nofollow noopener noreferrer" title={href}
	><slot />{#if !noIcon}<img
			class="no-print"
			src="img/external-link.svg"
			alt={href}
			width="24"
			height="24"
		/>{/if}<span class="on-print">({href})</span></a
>

<style lang="scss">
	@import 'spectre.css/src/_variables';

	a {
		> img {
			height: 1rem;
			width: 1rem;
			margin-left: 0.5ch;
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
