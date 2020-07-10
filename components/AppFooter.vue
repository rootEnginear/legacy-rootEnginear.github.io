<template>
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
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      current_year: new Date().getFullYear()
    };
  }
};
</script>