import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      // nuxt-svgo is not loaded in plain Vitest, replace .svg imports with a noop component
      { find: /^.*\.svg(\?.*)?$/, replacement: fileURLToPath(new URL('./tests/stubs/svg.ts', import.meta.url)) },
      // #imports is a Nuxt virtual module; alias to a local stub for the composables we use
      { find: '#imports', replacement: fileURLToPath(new URL('./tests/stubs/nuxt-imports.ts', import.meta.url)) },
      // Replace vue-i18n with a stub returning translation keys — keeps tests independent from messages
      { find: 'vue-i18n', replacement: fileURLToPath(new URL('./tests/stubs/vue-i18n.ts', import.meta.url)) },
      { find: '@', replacement: fileURLToPath(new URL('./app', import.meta.url)) },
      { find: '@@', replacement: fileURLToPath(new URL('./', import.meta.url)) },
    ],
  },
  test: {
    environment: 'happy-dom',
    include: ['tests/**/*.spec.ts'],
    setupFiles: ['./tests/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['app/**/*.{ts,vue}', 'domain/**/*.ts'],
      exclude: ['app/locales/**', 'app/plugins/**', '**/*.d.ts'],
    },
  },
});
