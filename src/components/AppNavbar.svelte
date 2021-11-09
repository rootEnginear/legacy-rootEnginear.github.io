<script>
	import AppExternalLink from 'components/AppExternalLink.svelte';
</script>

<div class="columns no-print">
	<div class="column" />
	<nav class="main-navigation column col-auto">
		<a href="/">Home</a>
		<AppExternalLink href="https://www.linkedin.com/in/suthep-ch/" noIcon
			>Certificates</AppExternalLink
		>
		<AppExternalLink href="https://rootenginear.gitbook.io/blog/" noIcon>Blog</AppExternalLink>
	</nav>
</div>

<style>
	.main-navigation > :global(a) {
		margin-left: 0.4rem;
	}
</style>
