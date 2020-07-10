<template>
  <article>
    <header>
      <nuxt-content v-if="header" :document="header" />
    </header>
    <hr v-if="header" />
    <div class="columns">
      <aside v-if="doc.toc.length" class="column col-3 col-md-12">
        <ul class="menu toc-sticky">
          <li class="divider" data-content="TABLE OF CONTENTS">
            <span>Table of contents</span>
          </li>
          <li v-for="header in doc.toc" :key="header.id" class="menu-item">
            <a
              :class="{ indent: header.depth === 3 }"
              @click="gotoHash(header.id)"
              >{{ header.text }}</a
            >
          </li>
        </ul>
        <br />
      </aside>
      <main :class="{ column: 1, 'col-9': doc.toc.length, 'col-md-12': 1 }">
        <nuxt-content :document="doc" />
      </main>
    </div>
  </article>
</template>

<script>
import NUXT_CONFIG from "~/nuxt.config";

export default {
  async asyncData({ $content, params }) {
    const doc = await $content("index").fetch();
    const header = await $content("header/index").fetch();
    return { doc, header };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.doc.lang || NUXT_CONFIG.head.htmlAttrs.lang
      },
      title: this.doc.title || NUXT_CONFIG.head.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description || NUXT_CONFIG.head.meta[2].content
        }
      ],
      script: [
        {
          defer: true,
          src: "https://use.fontawesome.com/releases/v5.13.1/js/solid.js",
          integrity:
            "sha384-81RFXCmeESYg4G/uFGo6Tu/eeK3klw0oKItW3nPhi2BuryJcE4lkOkwWsW6jzoNz",
          crossorigin: "anonymous"
        },
        {
          defer: true,
          src: "https://use.fontawesome.com/releases/v5.13.1/js/brands.js",
          integrity:
            "sha384-Ay9V1h0l5sywM7gJ5YvOc05QytfKqZAElRgqU5kPcIIUAUBqLOYwu9gnW6p5t/FN",
          crossorigin: "anonymous"
        },
        {
          defer: true,
          src: "https://use.fontawesome.com/releases/v5.13.1/js/fontawesome.js",
          integrity:
            "sha384-4NJBLvz0eHSgtSVDb+VOLh4cxmVluIBqCaNw97NvJAo18r+qV9pze1g4YnhB/X6Y",
          crossorigin: "anonymous"
        }
      ],
      noscript: [
        {
          innerHTML:
            '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css">'
        }
      ]
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
    }
  }
};
</script>