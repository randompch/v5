import { createI18n } from 'vue-i18n';
import { defineNuxtPlugin } from '#imports';
import en from '@/locales/en.json';

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
