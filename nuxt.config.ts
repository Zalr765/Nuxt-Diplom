// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: ['~/plugins/pinia.js'],
  router: {
    middleware: ['auth']
  },
  css: ['@/assets/scss/index.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/scss/base/variables.scss";  @import "@/assets/scss/base/mixins.scss";`,
        },
      },
    },
  },

})
