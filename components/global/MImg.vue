<template>
  <img ref="img_element" :data-src="loaded_img" />
</template>

<script>
export default {
  name: "MImg",
  props: {
    src: {
      type: String,
      required: true
    }
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImageObserver.observe(this.$refs.img_element);
    } else {
      let active = false;

      const lazyLoad = () => {
        if (active === false) {
          active = true;

          setTimeout(() => {
            let lazyImage = this.$refs.img_element;
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 0 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }

            active = false;
          }, 200);
        }
      };

      document.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);
    }
  },
  computed: {
    loaded_img() {
      return require(`~/assets/${this.src}`);
    }
  }
};
</script>
