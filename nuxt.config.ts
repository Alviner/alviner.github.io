// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    contentHead: true
  },
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", "@nuxtjs/tailwindcss"],
  components: true,

  routeRules: {
    '/': { prerender: true }
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  compatibilityDate: '2024-07-13'
})
