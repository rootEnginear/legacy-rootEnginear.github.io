<template>
  <div class="container grid-lg">
    <app-navbar class="no-print" />
    <hr class="mb-2 no-print" />
    <nuxt />
    <hr class="mt-2 no-print" />
    <client-only>
      <app-go-top class="no-print" />
    </client-only>
    <app-footer />
  </div>
</template>

<script>
import AppGoTop from "@/components/AppGoTop";
import AppNavbar from "@/components/AppNavbar";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppGoTop,
    AppNavbar,
    AppFooter,
  },
};
</script>