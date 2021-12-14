<script lang="ts">
	import { onMount } from 'svelte';

	import IndexContent from 'components/IndexContent.svelte';
	import AppExternalLink from 'components/AppExternalLink.svelte';
	import AppImage from 'components/AppImage.svelte';

	import {
		SKILLS,
		JOBS,
		SIDE_PROJECTS,
		LANGUAGES,
		EDUCATIONS,
		ACHIEVEMENTS,
		FREELANCE_JOBS
	} from 'data/index';

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
					<a href="#work-experiences" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work Experiences
					</a>
				</li>
				<li class="menu-item">
					<a href="#achievements" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">🏆&#xFE0F;</span> Achievements
					</a>
				</li>
				<li class="menu-item">
					<a href="#technological-skills" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">🔮&#xFE0F;</span>
						Technological Skills
					</a>
				</li>
				<li class="menu-item">
					<a href="#side-projects" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side Projects
					</a>
				</li>
				<li class="menu-item">
					<a href="#languages" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">💬&#xFE0F;</span>
						Languages
					</a>
				</li>
				<li class="menu-item">
					<a href="#education" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span>
						Education
					</a>
				</li>
				<li class="menu-item">
					<a href="#random-facts" on:click|preventDefault={manualScroll}>
						<span class="emoji hide-xs" aria-hidden="true">🏝&#xFE0F;</span>
						Random Facts
					</a>
				</li>
			</ul>
			<br />
		</aside>
		<main class="col- col-md-12 col-9">
			<!-- Work Experiences -->
			<section>
				<h2 id="work-experiences">
					<span class="emoji hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work Experiences
				</h2>
				<table class="table-job">
					<tbody>
						{#each JOBS as job, i (i)}
							<tr>
								<td>{job.date}</td>
								<td>
									<strong>{job.title}</strong>
									{#if job.place?.name}at
										{#if job.place.url}
											<AppExternalLink href={job.place.url}>{job.place.name}</AppExternalLink>
										{:else}
											{job.place.name}
										{/if}
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
				<p class="my-2">
					My primary work experience is listed above. I also worked as a freelancer or volunteered
					on several projects while pursuing my bachelor's degree.
				</p>
				<details>
					<summary class="c-hand">List of my freelance and voluntary work</summary>
					<table class="table-job">
						<tbody>
							{#each FREELANCE_JOBS as job, i (i)}
								<tr>
									<td>{job.date}</td>
									<td>
										{job.description}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</details>
			</section>
			<hr />
			<!-- Achievements -->
			<section>
				<h2 id="achievements">
					<span class="emoji hide-xs" aria-hidden="true">🏆&#xFE0F;</span> Achievements
				</h2>
				{#each ACHIEVEMENTS as ach, i (i)}
					<article class="achievement-container">
						<div class="cols">
							<div class="col- col-xs-12 col-lg-8 col-9">
								<h3 class="h4">{ach.name}</h3>
								<p class="ach-content">
									{ach.description}
								</p>
								<footer class="small">
									&mdash;
									<span>
										{ach.date.toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</span>
									{#if ach.links && ach.links.length}
										|
										{#each ach.links as link, j (j)}
											<AppExternalLink href={link.url}>{link.name}</AppExternalLink>
										{/each}
									{/if}
								</footer>
							</div>
							<div class="col- col-xs-12 col-lg-4 col-3 ach-image-container">
								<AppImage images={ach.images} alt={ach.imageAlt} responsive />
							</div>
						</div>
					</article>
				{/each}
			</section>
			<hr />
			<!-- Technological Skills -->
			<section>
				<h2 id="technological-skills">
					<span class="emoji hide-xs" aria-hidden="true">🔮&#xFE0F;</span>
					Technological Skills
				</h2>
				<div class="cols">
					<div class="col- col-6">
						<p>
							<span class="emoji hide-xs" aria-hidden="true">🔥&#xFE0F;</span>
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
							<span class="emoji hide-xs" aria-hidden="true">👍&#xFE0F;</span>
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
							<span class="emoji hide-xs" aria-hidden="true">👌&#xFE0F;</span>
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
							<span class="emoji hide-xs" aria-hidden="true">🤸‍♂️&#xFE0F;</span> Other interests:
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
			<!-- Side Projects -->
			<section>
				<h2 id="side-projects">
					<span class="emoji hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side Projects
				</h2>
				<ul>
					{#each SIDE_PROJECTS as project, i (i)}
						<li>
							<p>
								<strong>{project.title}</strong>{#if project.link}<AppExternalLink
										href={project.link}
									/>{/if}
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
			<!-- Languages -->
			<section>
				<h2 id="languages">
					<span class="emoji hide-xs" aria-hidden="true">💬&#xFE0F;</span> Languages
				</h2>
				<ul>
					{#each LANGUAGES as language, i (i)}
						<li><strong>{language.name}:</strong> {language.level}</li>
					{/each}
				</ul>
			</section>
			<hr />
			<!-- Education -->
			<section>
				<h2 id="education">
					<span class="emoji hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span> Education
				</h2>
				<ul>
					{#each EDUCATIONS as education, i (i)}
						<li>
							<p>
								<strong>{education.name}</strong><br />
								{#each education.description as line, j (j)}
									{line}<br />
								{/each}
								{#if !education.graduate}Current{/if} Cumulative GPA: {education.gpa}
							</p>
						</li>
					{/each}
				</ul>
			</section>
			<!-- Random Facts -->
			<section>
				<h2 id="random-facts">
					<span class="emoji hide-xs" aria-hidden="true">🏝&#xFE0F;</span> Random Facts
				</h2>
				<ul>
					<li>
						I learned how to code for the first time when I was in 4th grade. I began learning to
						write Visual Basic scripts in Microsoft Excel (aka the VBA.) I didn't even know what is
						the difference between a string and an integer at that time. But learning from trial and
						errors worked out for me (or should I say "If it worked, don't touch." worked for me.)
					</li>
					<li>I sucks at math. But I didn't hate it. &mdash; There's a difference there.</li>
					<li>
						I used to be in a marching band in high school as a color guard. Yub, I used to be able
						to do a split but I don't think I can anymore (?).
					</li>
					<li>
						I love coffee. I once drank liters of it before throwing up terribly. Well, fortunately,
						I didn't have to go to the hospital or anything. I just survived that caffeine dosage.
					</li>
					<li>My vocal range is D2 - D5. I used to be a member of my university's choir.</li>
				</ul>
			</section>
		</main>
	</div>
</div>
