<template>
  <article>
    <index-header />
    <hr />
    <div class="cols">
      <aside class="col- col-3 col-md-12 no-print">
        <ul class="menu toc-sticky">
          <li
            class="divider"
            data-content="TABLE OF CONTENTS"
            role="presentation"
          ></li>
          <li class="menu-item">
            <a
              href="javascript:void(0)"
              @click="gotoHash('technological-skills')"
            >
              <span class="hide-xs" aria-hidden="true">🔮&#xFE0F;</span>
              Technological Skills
            </a>
          </li>
          <li class="menu-item">
            <a href="javascript:void(0)" @click="gotoHash('work-experiences')">
              <span class="hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work
              Experiences
            </a>
          </li>
          <li class="menu-item">
            <a href="javascript:void(0)" @click="gotoHash('side-projects')">
              <span class="hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side
              Projects
            </a>
          </li>
          <li class="menu-item">
            <a href="javascript:void(0)" @click="gotoHash('languages')">
              <span class="hide-xs" aria-hidden="true">💬&#xFE0F;</span>
              Languages
            </a>
          </li>
          <li class="menu-item">
            <a href="javascript:void(0)" @click="gotoHash('education')">
              <span class="hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span>
              Education
            </a>
          </li>
        </ul>
        <br />
      </aside>
      <main class="col- col-md-12 col-9">
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
              <li>HTML &amp; CSS</li>
              <li>JavaScript</li>
              <li>
                Vue.js
                <span class="small"
                  ><span class="no-br">(CLI, Router,</span> Vuex, Nuxt)</span
                >
              </li>
            </ul>
          </div>
          <div class="col- col-6">
            <p>
              <span class="hide-xs" aria-hidden="true">👍&#xFE0F;</span>
              Experienced with:
            </p>
            <ul>
              <li>SCSS/SASS</li>
              <li>Firebase</li>
              <li>
                SQL, RDBMS
                <span class="small">(MySQL, MariaDB)</span>
              </li>
              <li>UI/UX Designing</li>
              <li>Git</li>
            </ul>
          </div>
          <div class="col- col-6">
            <p>
              <span class="hide-xs" aria-hidden="true">👌&#xFE0F;</span>
              Familiar with:
            </p>
            <ul>
              <li>TypeScript</li>
              <li>
                React.js
                <span class="small"
                  >(CRA,
                  <span class="no-br">Styled Components,</span> Next.js)</span
                >
              </li>
              <li>
                Node.js
                <ul>
                  <li>
                    Express.js
                    <span class="small">(RESTfulAPI)</span>
                  </li>
                  <li>Socket.IO</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col- col-6">
            <p>
              <span class="hide-xs" aria-hidden="true">🤸‍♂️&#xFE0F;</span> Other
              interests:
            </p>
            <ul>
              <li>Mobile Application Development</li>
              <li>Artificial Intelligences</li>
              <li>Processing Technology</li>
            </ul>
          </div>
        </div>
        <hr />
        <h2 id="work-experiences">
          <span class="hide-xs" aria-hidden="true">💼&#xFE0F;</span> Work
          Experiences
        </h2>
        <table class="table-job">
          <tbody>
            <tr v-for="(job, index) in jobs" :key="index">
              <td>{{ job.date }}</td>
              <td>
                <strong>{{ job.title }}</strong>
                <app-external-link v-if="job.link" :data-href="job.link" />
                <br />
                <span>{{ job.description }}</span>
                <br />
                <span class="small">
                  <span class="hide-xs" aria-hidden="true" role="presentation"
                    >&mdash;
                  </span>
                  Keywords: {{ job.keywords.join(", ") }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2 id="side-projects">
          <span class="hide-xs" aria-hidden="true">🕹&#xFE0F;</span> Side
          Projects
        </h2>
        <ul>
          <li v-for="(project, index) in side_projects" :key="index">
            <p>
              <strong>{{ project.title }}</strong>
              <app-external-link :data-href="project.link" /><br />
              <span>{{ project.description }}</span
              ><br />
              <span class="small">
                <span class="hide-xs" aria-hidden="true" role="presentation"
                  >&mdash;
                </span>
                Keywords: {{ project.keywords.join(", ") }}
              </span>
            </p>
          </li>
        </ul>
        <hr />
        <h2 id="languages">
          <span class="hide-xs" aria-hidden="true">💬&#xFE0F;</span> Languages
        </h2>
        <ul>
          <li><strong>Thai:</strong> Native speaker</li>
          <li><strong>English:</strong> Intermediate</li>
          <li><strong>German:</strong> Conversational</li>
        </ul>
        <hr />
        <h2 id="education">
          <span class="hide-xs" aria-hidden="true">👨‍🎓&#xFE0F;</span> Education
        </h2>
        <ul>
          <li>
            <p>
              <strong>King Mongkut's University of Technology Thonburi</strong
              ><br />
              Studying bachelor's degree
              <span class="no-br">(3<sup>rd</sup> year).</span><br />
              Majoring in computer engineering.<br />
              Current Cumulative GPA: 3.15
            </p>
          </li>
          <li>
            <p>
              <strong>Benchamaracharungsarit School</strong><br />
              Studying Intensive English Program (IEP).<br />
              Cumulative GPA: 3.76
            </p>
          </li>
        </ul>
      </main>
    </div>
  </article>
</template>

<script>
import AppExternalLink from "@/components/AppExternalLink";
import IndexHeader from "@/components/IndexHeader";
import { JOBS } from "@/content/jobs";
import { SIDE_PROJECTS } from "@/content/side_projects";

const TITLE = "Suthep Chanchuphol";
const FULL_TITLE = TITLE + " - All about @rootEnginear"; // nuxt.config
const DESCRIPTION =
  "A 3rd-year computer-engineering student who is neat and very attentive to every detail. Yet, he is friendly and rational.";

export default {
  components: {
    AppExternalLink,
    IndexHeader,
  },
  head() {
    return {
      htmlAttrs: {
        lang: "en-US",
      },
      title: TITLE,
      meta: [
        // Title/Description
        { name: "title", content: FULL_TITLE },
        { hid: "description", name: "description", content: DESCRIPTION },
        // OG, FB
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://rootenginear.github.io/" },
        { property: "og:title", content: FULL_TITLE },
        { property: "og:description", content: DESCRIPTION },
        {
          property: "og:image",
          content: "https://rootenginear.github.io/social.jpg",
        },
        // Twitter
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: "https://rootenginear.github.io/" },
        { property: "twitter:title", content: FULL_TITLE },
        { property: "twitter:description", content: DESCRIPTION },
        {
          property: "twitter:image",
          content: "https://rootenginear.github.io/social.jpg",
        },
      ],
    };
  },
  data() {
    return {
      jobs: JOBS,
      side_projects: SIDE_PROJECTS,
    };
  },
  methods: {
    gotoHash(hash) {
      window.scrollTo(
        0,
        document.getElementById(hash).getBoundingClientRect().top +
          window.scrollY -
          16
      );
    },
  },
};
</script>