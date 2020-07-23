<template>
  <div class="container grid-lg">
    <app-navbar />
    <hr class="mb-2" />
    <nuxt />
    <hr class="mt-2" />
    <client-only>
      <app-go-top />
    </client-only>
    <app-footer />
  </div>
</template>

<script>
import AppNavbar from "@/components/AppNavbar";
import AppGoTop from "@/components/AppGoTop";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppNavbar,
    AppGoTop,
    AppFooter,
  },
};
</script>