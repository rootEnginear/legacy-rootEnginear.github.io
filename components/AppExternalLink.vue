<template functional>
  <a :href="props.dataHref" target="_blank" rel="nofollow noopener noreferrer">
    <img
      class="no-print"
      src="@/assets/external-link.svg"
      :alt="props.dataAlt || 'Go to the homepage'"
      width="24"
      height="24"
    />
    <span class="on-print">({{ props.dataHref }})</span>
  </a>
</template>

<script>
export default {
  name: "AppExternalLink",
};
</script>

<style lang="scss" scoped>
@import "~spectre.css/src/_variables";

a {
  color: $body-font-color;

  > img {
    height: 1rem;
    transform: translateY(0.25rem);
  }

  > span {
    display: none;
    font-size: 0.8em;

    @media print {
      display: initial;
    }
  }
}
</style>