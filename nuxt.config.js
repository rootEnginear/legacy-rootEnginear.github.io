export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: "th"
    },
    title: "An untitled page",
    titleTemplate: "%s - All about @rootEnginear",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Keep coding and seeking new possibilities."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://cdn.jsdelivr.net"
      },
      {
        rel: "dns-prefetch",
        href: "https://cdn.jsdelivr.net"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/gh/picturepan2/spectre/dist/spectre.min.css"
      },
      {
        rel: "preload",
        as: "style",
        href:
          "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css",
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: "preload",
        as: "style",
        href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
        integrity:
          "sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq",
        crossorigin: "anonymous",
        onload: "this.onload=null;this.rel='stylesheet'"
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Regular.woff2",
        crossorigin: ""
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Regular.woff",
        crossorigin: ""
      },
      {
        rel: "preload",
        as: "font",
        type: "font/ttf",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Regular.ttf",
        crossorigin: ""
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff2/IBMPlexSans-Bold.woff2",
        crossorigin: ""
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/woff/IBMPlexSans-Bold.woff",
        crossorigin: ""
      },
      {
        rel: "preload",
        as: "font",
        type: "font/ttf",
        href:
          "https://cdn.jsdelivr.net/gh/IBM/plex/IBM-Plex-Sans/fonts/complete/ttf/IBMPlexSans-Bold.ttf",
        crossorigin: ""
      }
    ],
    noscript: [
      {
        innerHTML: `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
    `
      }
    ],
    __dangerouslyDisableSanitizers: ["noscript"]
  },
  /*
   ** Global CSS
   */
  css: ["~/css/fonts.css", "~/css/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content"
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      remarkPlugins: () => [
        "remark-squeeze-paragraphs",
        "remark-slug",
        "remark-external-links",
        "remark-math",
        "remark-sub-super",
        "remark-unwrap-images",
        "remark-attr"
      ],
      rehypePlugins: ["rehype-katex"]
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
