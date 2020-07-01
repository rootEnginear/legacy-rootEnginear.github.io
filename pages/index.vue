<template>
  <div class="container">
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const doc = await $content("index").fetch();
    return { doc };
  },
  head() {
    return {
      htmlAttrs: {
        lang: "en-US"
      },
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description || ""
        }
      ]
    };
  }
};
</script>
