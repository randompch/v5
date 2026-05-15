import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./app', import.meta.url)),
        '@@': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
  },
  app: {
    head: {
      script: process.env.NODE_ENV === 'development'
        ? [{ src: 'http://localhost:8098' }]
        : [],
    },
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
    '@nuxtjs/i18n',
  ],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
  },
  // Use the plain Vue component import for SVGs. The default in nuxt-svgo v4
  // ("componentext") wraps each SVG in <nuxt-icon> which injects a
  // .nuxt-icon--fill { fill: currentColor } rule overriding fill="none".
  svgo: {
    defaultImport: 'component',
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    restructureDir: false,
    langDir: 'app/locales',
    locales: [
      { code: 'en', file: 'en.json' },
    ],
  },
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
