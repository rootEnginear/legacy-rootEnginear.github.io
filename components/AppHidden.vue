<template>
  <span @dblclick="reveal()" :style="span_style">
    {{ display_data }}
  </span>
</template>

<script>
export default {
  name: "AppHidden",
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      is_revealing: false,
    };
  },
  computed: {
    display_data() {
      return this.is_revealing ? this.data : "Double click to reveal data.";
    },
    span_style() {
      const user_select_value = ["none", "auto"];
      const cursor_value = ["pointer", "auto"];

      return {
        userSelect: user_select_value[+this.is_revealing],
        cursor: cursor_value[+this.is_revealing],
      };
    },
  },
  methods: {
    reveal() {
      this.is_revealing = !this.is_revealing;
    },
  },
};
</script>