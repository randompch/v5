import { defineNuxtConfig } from 'nuxt';
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
  typescript: {
    typeCheck: true,
    strict: true,
  },
  runtimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  vite: {
    plugins: [
      eslintPlugin(),
    ],
  },
});
