<script lang="ts">
	import { onMount } from 'svelte';

	import IndexContent from 'components/IndexContent.svelte';
	import AppExternalLink from 'components/AppExternalLink.svelte';

	import { SKILLS } from 'data/skills';
	import { JOBS } from 'data/jobs';
	import { SIDE_PROJECTS } from 'data/side_projects';
	import { LANGUAGES } from 'data/languages';
	import { EDUCATIONS } from 'data/educations';

	let manualScroll;
	onMount(() => {
		manualScroll = (e: MouseEvent) => {
			const element = e.target as HTMLAnchorElement;
			const hash = element.href.split('#')[1];
			window.scrollTo(
				0,
				document.getElementById(hash).getBoundingClientRect().top + window.scrollY - 16
			);
			return false;
		};
	});
</script>

<svelte:head>
	<title>Suthep Chanchuphol - All about @rootEnginear</title>
	<mata name="title" content="Suthep Chanchuphol - All about @rootEnginear" />
	<meta
		name="description"
		content="A 4th-year computer-engineering student who is neat and very attentive to every detail. Yet, he is very friendly."
	/>

	<!-- OG, FB -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rootenginear.github.io/" />
	<meta property="og:title" content="Suthep Chanchuphol - All about @rootEnginear" />
	<meta
		property="og:description"
		content="A 4th-year computer-engineering student who is neat and very attentive to every detail. Yet, he is very friendly."
	/>
	<meta property="og:image" content="https://rootenginear.github.io/social.jpg" />
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://rootenginear.github.io/" />
	<meta property="twitter:title" content="Suthep Chanchuphol - All about @rootEnginear" />
	<meta
		property="twitter:description"
		content="A 4th-year computer-engineering student who is neat and very attentive to every detail. Yet, he is very friendly."
	/>
	<meta property="twitter:image" content="https://rootenginear.github.io/social.jpg" />
</svelte:head>

<div>
	<IndexContent />
	<hr />
	<div class="cols">
		<aside class="col- col-3 col-md-12 no-print">
			<ul class="menu toc-sticky">
				<li class="divider" data-content="TABLE OF CONTENTS" role="presentation" />
				<li class="menu-item">
					<a href="#technological-skills" on:click|preventDefault={manualScroll}>
						<span class="hide-xs" aria-hidden="true">🔮&#xFE0F;</span>
						Technological Skills
					</a>
				</li>
				<li class="menu-item">
					<a href="#work-experiences" on:click|preventDefault={manualScroll}>
						<span class="hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work Experiences
					</a>
				</li>
				<li class="menu-item">
					<a href="#side-projects" on:click|preventDefault={manualScroll}>
						<span class="hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side Projects
					</a>
				</li>
				<li class="menu-item">
					<a href="#languages" on:click|preventDefault={manualScroll}>
						<span class="hide-xs" aria-hidden="true">💬&#xFE0F;</span>
						Languages
					</a>
				</li>
				<li class="menu-item">
					<a href="#education" on:click|preventDefault={manualScroll}>
						<span class="hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span>
						Education
					</a>
				</li>
			</ul>
			<br />
		</aside>
		<main class="col- col-md-12 col-9">
			<section>
				<h2 id="technological-skills">
					<span class="hide-xs" aria-hidden="true">🔮&#xFE0F;</span>
					Technological Skills
				</h2>
				<div class="cols">
					<div class="col- col-6">
						<p>
							<span class="hide-xs" aria-hidden="true">🔥&#xFE0F;</span>
							Proficient in:
						</p>
						<ul>
							{#each SKILLS.proficient as skill, i (i)}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div class="col- col-6">
						<p>
							<span class="hide-xs" aria-hidden="true">👍&#xFE0F;</span>
							Experienced with:
						</p>
						<ul>
							{#each SKILLS.experienced as skill, i (i)}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div class="col- col-6">
						<p>
							<span class="hide-xs" aria-hidden="true">👌&#xFE0F;</span>
							Familiar with:
						</p>
						<ul>
							{#each SKILLS.familiar as skill, i (i)}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
					<div class="col- col-6">
						<p>
							<span class="hide-xs" aria-hidden="true">🤸‍♂️&#xFE0F;</span> Other interests:
						</p>
						<ul>
							{#each SKILLS.other as skill, i (i)}
								<li>{skill}</li>
							{/each}
						</ul>
					</div>
				</div>
			</section>
			<hr />
			<section>
				<h2 id="work-experiences">
					<span class="hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work Experiences
				</h2>
				<table class="table-job">
					<tbody>
						{#each JOBS as job, i (i)}
							<tr>
								<td>{job.date}</td>
								<td>
									<strong>{job.title}</strong>&nbsp;{#if job.place}at {job.place}{/if}
									{#if job.link}
										<AppExternalLink href={job.link} alt={job.title} />
									{/if}
									<br />
									<span>{job.description}</span>
									<br />
									<span class="small">
										<span class="hide-xs" aria-hidden="true" role="presentation">&mdash; </span>
										Keywords: {job.keywords.join(', ')}
									</span>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</section>
			<hr />
			<section>
				<h2 id="side-projects">
					<span class="hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side Projects
				</h2>
				<ul>
					{#each SIDE_PROJECTS as project, i (i)}
						<li>
							<p>
								<strong>{project.title}</strong>
								{#if project.link}
									<AppExternalLink href={project.link} alt={project.title} />
								{/if}
								<br />
								<span>{project.description}</span><br />
								<span class="small">
									<span class="hide-xs" aria-hidden="true" role="presentation">&mdash; </span>
									Keywords: {project.keywords.join(', ')}
								</span>
							</p>
						</li>
					{/each}
				</ul>
			</section>
			<hr />
			<section>
				<h2 id="languages">
					<span class="hide-xs" aria-hidden="true">💬&#xFE0F;</span> Languages
				</h2>
				<ul>
					{#each LANGUAGES as language, i (i)}
						<li><strong>{language.name}:</strong> {language.level}</li>
					{/each}
				</ul>
			</section>
			<hr />
			<section>
				<h2 id="education">
					<span class="hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span> Education
				</h2>
				<ul>
					{#each EDUCATIONS as education, i (i)}
						<li>
							<p>
								<strong>{education.name}</strong><br />
								{#each education.desc as line, j (j)}
									{line}<br />
								{/each}
								{#if education.graduate}Current{/if} Cumulative GPA: {education.gpa}
							</p>
						</li>
					{/each}
				</ul>
			</section>
		</main>
	</div>
</div>
