export default {
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
      },
      { name: "apple-mobile-web-app-title", content: "rootEnginear" },
      { name: "application-name", content: "rootEnginear" },
      { name: "msapplication-TileColor", content: "#e34234" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#e34234" },
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
        <link rel="stylesheet" href="/no-script.css">
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
  buildModules: ["@nuxtjs/google-gtag"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "@nuxtjs/sitemap"
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    liveEdit: false,
    markdown: {
      remarkPlugins: () => [
        "remark-squeeze-paragraphs",
        "remark-slug",
        "remark-external-links",
        "remark-math",
        "remark-attr",
        "~/plugins/remark-sub-super-modified.js"
      ],
      rehypePlugins: ["rehype-katex"]
    }
  },
  sitemap: {
    hostname: "https://rootenginear.github.io/",
    exclude: ["/blog"],
    routes: [
      { url: "/", changefreq: "daily", priority: 1 },
      "/blog/mystudy-1-1",
      "/blog/mystudy-1-2",
      "/blog/mystudy-1-3"
    ],
    defaults: {
      changefreq: "monthly",
      priority: 0.7
    }
  },
  "google-gtag": {
    id: "G-F2N4EGMQ22"
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
