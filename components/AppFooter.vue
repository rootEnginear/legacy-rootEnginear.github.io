<template functional>
  <footer class="no-print">
    Copyright &copy; {{ new Date().getFullYear() }}
    <span class="no-br">Suthep Chanchuphol</span>
    <span class="no-br">All right reserved.</span>
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
};
</script>

<style scoped>
@media (max-width: 480px) {
  footer {
    text-align: center;
  }
}
</style>