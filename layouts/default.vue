<template>
  <div class="container grid-lg">
    <div class="columns">
      <div class="column">
        <a v-if="this.$nuxt.$route.path !== '/'" @click="$router.go(-1)"
          >&laquo; Back</a
        >
      </div>
      <nav class="main-navigation column col-auto" role="navigation">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </nav>
    </div>
    <hr class="mb-2" />
    <nuxt />
    <hr class="mt-2" />
    <footer>
      Copyright &copy; {{ current_year }} Suthep Chanchuphol All right reserved.
      <br />
      <small
        >Also, check out this awesome CSS framework &ndash;
        <a
          href="https://picturepan2.github.io/spectre/"
          rel="nofollow,noopener,noreferrer"
          target="_blank"
          >Spectre.css</a
        >
      </small>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_year: new Date().getFullYear()
    };
  }
};
</script>