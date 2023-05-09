import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
  runtimeConfig: {
    public: {
      email: process.env.EMAIL,
      googleAnalyticsId: process.env.GOOGLE_TAG_ID,
    },
  },
  typescript: {
    typeCheck: false,
    strict: false,
  },
  vite: {
    plugins: [
      eslintPlugin(),
    ],
  },
});
