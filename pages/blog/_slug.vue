<template>
  <article>
    <header>
      <h1>{{ doc.title }}</h1>
      <blockquote v-if="doc.description">{{ doc.description }}</blockquote>
      <nuxt-content v-if="header" :document="header" />
    </header>
    <hr v-if="header" />
    <section class="cols">
      <aside v-if="doc.toc.length" class="col- col-3 col-md-12">
        <ul class="menu toc-sticky">
          <li
            class="divider"
            data-content="TABLE OF CONTENTS"
            role="presentation"
          ></li>
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
      <main :class="{ 'col- col-md-12': 1, 'col-9': doc.toc.length }">
        <nuxt-content :document="doc" />
      </main>
    </section>
    <ul class="pagination">
      <li class="page-item page-prev">
        <nuxt-link v-if="prev" :to="prev.slug">
          <div class="page-item-subtitle">&leftarrow; บทความถัดไป</div>
          <div class="page-item-title h5">{{ prev.title }}</div>
        </nuxt-link>
      </li>
      <li class="page-item page-next">
        <nuxt-link v-if="next" :to="next.slug">
          <div class="page-item-subtitle">บทความก่อนหน้า &rightarrow;</div>
          <div class="page-item-title h5">{{ next.title }}</div>
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
const CONTENT_PATH = "blog/";

export default {
  async asyncData({ $content, params }) {
    let header;
    try {
      header = await $content(
        CONTENT_PATH + "header/" + (params.slug || "../index")
      ).fetch();
    } catch (e) {}
    const doc = await $content(CONTENT_PATH, params.slug || "../index").fetch();
    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("dateWritten", "desc")
      .surround(params.slug)
      .fetch();
    return { doc, header, prev, next };
  },
  head() {
    return {
      htmlAttrs: {
        lang: this.doc.lang || "th", // nuxt.config
      },
      title: this.doc.title || "An untitled page", // nuxt.config
      titleTemplate: "%s - Blog of @rootEnginear",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.doc.description || this.doc.title + " - Blog of @rootEnginear",
        },
      ],
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