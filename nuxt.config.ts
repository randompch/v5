import { fileURLToPath } from 'node:url';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    '@@': fileURLToPath(new URL('./', import.meta.url)),
    'vue-i18n': fileURLToPath(new URL(
      './node_modules/vue-i18n/dist/vue-i18n.node.mjs',
      import.meta.url,
    )),
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./app', import.meta.url)),
        '@@': fileURLToPath(new URL('./', import.meta.url)),
      },
    },
    define: {
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    },
  },
  nitro: {
    esbuild: {
      options: {
        define: {
          __VUE_PROD_DEVTOOLS__: 'false',
          __VUE_OPTIONS_API__: 'true',
          __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        },
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
  ],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
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
