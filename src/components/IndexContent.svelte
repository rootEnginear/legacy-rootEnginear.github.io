<script>
	import AppHidden from 'components/AppHidden.svelte';
	import AppImage from 'components/AppImage.svelte';
	import AppExternalLink from 'components/AppExternalLink.svelte';

	const PROFILE_IMAGES = [
		{ src: 'profile.webp', type: 'image/webp' },
		{ src: 'profile.jpg', type: 'image/jpeg' }
	];

	const ICONS = {
		github: [{ src: 'github.svg', type: 'image/svg+xml' }],
		linkedin: [{ src: 'linkedin.svg', type: 'image/svg+xml' }]
	};
</script>

<header class="cols">
	<div class="col- col-xs-12 col-md-7 col-lg-8 col-9">
		<h1>Suthep Chanchuphol</h1>
		<blockquote>Frontend Developer</blockquote>
		<p>
			A 4th-year computer-engineering student who is very attentive to every detail. Any untidy
			elements by any pixels cannot bypass his sharp, neat, eagle eyes. Still, he is very friendly
			and reasonable. 👨‍💻&#xFE0F;
		</p>
		<table>
			<tbody>
				<tr>
					<td class="text-center" aria-hidden="true">🗺&#xFE0F;</td>
					<td class="pl-1">Bangkok, Thailand.</td>
				</tr>
				<tr>
					<td class="text-center" aria-hidden="true">📧&#xFE0F;</td>
					<td class="pl-1">
						<AppHidden data="suthep.chanchuphol(at)outlook.com" />
					</td>
				</tr>
				<tr>
					<td aria-hidden="true">
						<AppImage
							images={ICONS.linkedin}
							alt="LinkedIn"
							block
							imgStyle="width:.9rem;margin:auto"
							width={24}
							height={24}
						/>
					</td>
					<td class="pl-1">
						<AppExternalLink href="https://www.linkedin.com/in/suthep-ch/" noIcon
							>LinkedIn</AppExternalLink
						>
					</td>
				</tr>
				<tr>
					<td aria-hidden="true">
						<AppImage
							images={ICONS.github}
							alt="GitHub"
							block
							imgStyle="width:.9rem;margin:auto"
							width={24}
							height={24}
						/>
					</td>
					<td class="pl-1">
						<AppExternalLink href="https://github.com/rootEnginear" noIcon>GitHub</AppExternalLink>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col- col-xs-12 col-md-5 col-lg-4 col-3 d-flex" style="align-items: center">
		<AppImage
			images={PROFILE_IMAGES}
			alt="Suthep Chanchuphol"
			responsive
			imgClass="s-circle"
			width={406}
			height={406}
		/>
	</div>
</header>
