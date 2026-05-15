import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
  },
  compatibilityDate: '2025-01-01',
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
    '@nuxtjs/mcp-toolkit',
  ],
  components: false,
  imports: {
    autoImport: false,
  },
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
});
