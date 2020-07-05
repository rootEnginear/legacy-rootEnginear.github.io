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

<style scoped>
@media (min-width: 841px) {
  .toc-sticky {
    position: sticky;
    top: 0.4rem;
  }
}
</style>