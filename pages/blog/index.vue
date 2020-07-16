<template>
  <div>
    <h1>Blog</h1>
    <div v-if="docs.length" class="columns">
      <div
        v-for="(doc, i) in docs"
        :key="doc.slug"
        class="column col-xs-12 col-md-6 col-lg-4 col-3 pb-2 d-flex"
      >
        <nuxt-link
          :to="doc.path"
          class="text-dark d-flex"
          style="text-decoration:none;flex:1 1 0"
        >
          <div class="card c-hand" style="width:100%">
            <div class="card-image" style="position:relative">
              <!-- picture max dimension: 404px -->
              <m-picture
                :data-images="[
                  {
                    src: doc.image || `https://picsum.photos/id/${i}/404`,
                    href: !doc.image,
                    type: 'image/jpeg'
                  }
                ]"
                base-path=""
                :alt="doc.title"
                responsive
                style="position:absolute;top:0"
              />
            </div>
            <div class="card-header">
              <div class="card-title h5">{{ doc.title }}</div>
            </div>
            <div v-if="doc.description" class="card-body">
              {{ doc.description }}
            </div>
            <div
              class="card-footer text-right"
              style="font-size:80%;padding-top:.4rem"
            >
              {{ doc.createdAt | formatDate }} 📅
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div v-else class="no-article">
      <span class="emoji">¯\_(ツ)_/¯</span>
      <h2>No articles!</h2>
      <p>Yet, I might write some soon!</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content("blog")
      .only(["slug", "path", "image", "title", "description", "createdAt"])
      .sortBy("createdAt", "desc")
      .fetch();
    return { docs };
  },
  head() {
    return {
      title: "Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Blog of @rootEnginear"
        }
      ]
    };
  },
  methods: {
    gotoArticle(path) {
      this.$router.push(path);
    }
  },
  filters: {
    formatDate(value) {
      return Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      }).format(new Date(value));
    }
  }
};
</script>

<style scoped lang="scss">
.no-article {
  text-align: center;

  > .emoji {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -4px;
  }

  > h2 {
    margin: 0;
    letter-spacing: 1px;
  }
}

.card-image::before {
  content: "";
  padding-top: 100%;
  display: block;
  width: 100%;
  background: #bec4d4;
}
</style>