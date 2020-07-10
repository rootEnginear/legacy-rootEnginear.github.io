<template>
  <transition name="fade">
    <a class="gotop-button" v-if="scroll_top_enabled" @click="goTop"></a>
  </transition>
</template>

<script>
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default {
  name: "AppGoTop",
  created() {
    this.goTopHandler = debounce(() => {
      this.useGoTop();
    }, 100);
    document.addEventListener("scroll", this.goTopHandler);
    window.addEventListener("resize", this.goTopHandler);
    window.addEventListener("orientationchange", this.goTopHandler);
  },
  data() {
    return {
      scroll_top_enabled: false,
      goTopHandler: null
    };
  },
  methods: {
    useGoTop() {
      window.requestAnimationFrame(this.updateGoTopButton);
    },
    updateGoTopButton() {
      if (~~document.documentElement.scrollTop >= 64)
        !this.scroll_top_enabled && (this.scroll_top_enabled = true);
      else this.scroll_top_enabled && (this.scroll_top_enabled = false);
    },
    goTop() {
      window.scrollTo(0, 0);
    }
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.goTopHandler);
    window.removeEventListener("resize", this.goTopHandler);
    window.removeEventListener("orientationchange", this.goTopHandler);
  }
};
</script>

<style lang="scss" scoped>
.gotop-button {
  box-sizing: border-box;
  position: fixed;
  right: 6%;
  bottom: 32px;
  width: 40px;
  height: 40px;

  background: #fffc;
  border: 0.05rem solid #5755d9;
  border-radius: 0.1rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background cubic-bezier(0, 0, 0.2, 1) 0.075s;
  will-change: background;

  &::after {
    width: 10px;
    transform: rotate(45deg);
    transform-origin: center center;
    height: 10px;
    display: inline-block;
    content: "";
    border-top: 3px solid #5755d9;
    border-left: 3px solid #5755d9;
    position: relative;
    top: 3.5px;
    transition: border-color cubic-bezier(0, 0, 0.2, 1) 0.075s;
    will-change: border-color;
  }

  &:hover {
    background: #5755d9;
    transition: background cubic-bezier(0.4, 0, 1, 1) 0.1s;

    &::after {
      border-color: #fff;
      transition: border-color cubic-bezier(0.4, 0, 1, 1) 0.1s;
    }
  }

  @media (max-width: 480px) {
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    border: 0;
    background: #000c;
    color: #fff;
    text-decoration: none;
    border-radius: 0;

    &::before {
      content: "กลับด้านบน";
      margin-right: 0.5rem;
    }

    &::after {
      border-color: #fff;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-property: transform, opacity;
}

.fade-enter-active {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 0.25s;
}

.fade-leave-active {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translateY(72px);
  opacity: 0;
  will-change: transform, opacity;
}
</style>