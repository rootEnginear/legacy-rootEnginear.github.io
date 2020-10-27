<template functional>
  <a :href="props.dataHref" target="_blank" rel="noopener noreferrer">
    <img
      src="@/assets/external-link.svg"
      :alt="props.dataAlt || 'Go to the homepage'"
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