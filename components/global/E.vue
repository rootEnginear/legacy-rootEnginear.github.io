<template>
  <span v-html="transformed"></span>
</template>

<script>
import twemoji from "twemoji";

export default {
  data() {
    return {
      transformed: ""
    };
  },
  mounted() {
    this.transformed = twemoji.parse(this.$slots.default[0].text);
  }
};
</script>

<style>
</style>