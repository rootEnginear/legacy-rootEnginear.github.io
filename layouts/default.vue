<template>
  <div class="container grid-lg">
    <app-navbar />
    <hr class="mb-2 no-print" />
    <nuxt />
    <hr class="mt-2 no-print" />
    <client-only>
      <app-go-top
        :placeholder="this.$nuxt.$route.path !== '/' ? 'กลับด้านบน' : 'Go top'"
      />
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