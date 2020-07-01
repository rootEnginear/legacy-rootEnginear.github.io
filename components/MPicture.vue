<template>
  <picture ref="picture_element">
    <source
      v-for="({ src, type }, index) in import_images"
      :key="index"
      :srcset="image_intersected && src"
      :type="type"
    />
    <img
      ref="img_element"
      v-if="images_length"
      :data-src="import_images[images_length - 1].src"
      :alt="alt || 'This picture has no alternative text.'"
      :style="picture_style"
      :class="imgClass"
    />
  </picture>
</template>

<script>
export default {
  name: "MPicture",
  props: {
    // data-images
    dataImages: {
      type: Array,
      default: () => []
    },
    // alt
    alt: {
      type: String,
      required: true
    },
    // fit
    fit: {
      type: String,
      default: "initial"
    },
    // img-style
    imgStyle: {
      type: String,
      default: ""
    },
    // img-class
    imgClass: {
      type: String,
      default: ""
    },
    // responsive
    responsive: Boolean,
    // placeholder-height
    placeholderHeight: {
      type: String,
      default: "auto"
    },
    // block
    block: Boolean,
    // parallax
    parallax: Boolean
  },
  mounted() {
    // Lazy Load
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            this.image_intersected = true;
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
              this.image_intersected = true;
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
    // Parallax
    if (this.parallax) {
      document.addEventListener("scroll", this.useParallax);
      window.addEventListener("resize", this.useParallax);
      window.addEventListener("orientationchange", this.useParallax);
    }
  },
  beforeDestroy() {
    if (this.parallax) {
      document.removeEventListener("scroll", this.useParallax);
      window.removeEventListener("resize", this.useParallax);
      window.removeEventListener("orientationchange", this.useParallax);
    }
  },
  data() {
    return {
      image_intersected: false,
      parallax_offset: 0
    };
  },
  computed: {
    import_images() {
      return this.dataImages.map(({ src, type }) => {
        return {
          src: require(`~/assets/${src}`),
          type
        };
      });
    },
    images_length() {
      return this.dataImages.length;
    },
    placeholder_height() {
      return this.image_intersected
        ? ""
        : `display:block;height:${this.placeholderHeight}`;
    },
    picture_style() {
      return `${this.placeholder_height};
      ${this.block ? "display:block" : ""};
      object-fit:${this.fit};
      ${this.responsive ? "width:100%;height:auto;display:block" : ""};
      ${
        this.parallax
          ? `transform: translate3d(0,${this.parallax_offset}px,0)`
          : ""
      };
      ${this.imgStyle}`;
    }
  },
  methods: {
    useParallax() {
      if (
        this.$refs.picture_element.getBoundingClientRect().top <=
          window.innerHeight &&
        this.$refs.picture_element.getBoundingClientRect().bottom >= 0
      )
        window.requestAnimationFrame(this.updateParallax);
    },
    updateParallax() {
      this.parallax_offset = (
        0 -
        (window.innerHeight / 2 -
          (this.$refs.picture_element &&
            this.$refs.picture_element.getBoundingClientRect().top) || 0) /
          2
      ).toFixed(2);
    }
  }
};
</script>

<style>
</style>