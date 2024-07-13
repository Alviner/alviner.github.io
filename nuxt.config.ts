// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image"],
  components: true,

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-13'
})
