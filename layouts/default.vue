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
        <a
          href="https://github.com/rootEnginear"
          rel="nofollow,noopener,noreferrer"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a
          href="https://fb.me/mumu.universe"
          rel="nofollow,noopener,noreferrer"
          target="_blank"
          ><i class="fab fa-facebook"></i
        ></a>
      </nav>
    </div>
    <hr style="margin:.8rem 0 .4rem" />
    <nuxt />
    <hr />
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

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 32px 6%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

hr {
  border: none;
  border-top: 0.05rem solid #f1f3f5;
  height: 0.05rem;
  margin: 0.4rem 0 0.8rem;
}

ol,
ul {
  margin: 0.8rem 0 0.8rem 1rem;
  list-style-position: outside;
}

a {
  cursor: pointer;
}

a:visited {
  color: #5755d9;
}

a:visited:hover {
  color: #302ecd;
}

p {
  margin: 0;
}

.divider > span {
  display: none;
}

pre > code {
  background: initial;
  border-radius: initial;
  color: initial;
  font-size: initial;
  line-height: initial;
  padding: initial;
}

.main-navigation > a {
  margin-left: 0.4rem;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter {
  opacity: 0;
  transform: translateY(10%);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>