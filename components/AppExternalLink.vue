<template functional>
  <a :href="props.dataHref" target="_blank" rel="nofollow noopener noreferrer">
    <img
      src="@/assets/external-link.svg"
      :alt="props.dataAlt || 'Go to the homepage'"
      width="24"
      height="24"
    />
  </a>
</template>

<script>
export default {
  name: "AppExternalLink",
};
</script>

<style scoped>
img {
  height: 1rem;
  transform: translateY(0.25rem);
}
</style>