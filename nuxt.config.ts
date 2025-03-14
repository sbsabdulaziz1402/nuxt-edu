// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  vite: {
    css: {

    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/ui'
  ],
  // ui: { ssr: false },
  plugins: ["~/plugins/firebase.js"],
  // ssr: false,
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
