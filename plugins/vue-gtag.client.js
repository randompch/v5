import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log('API base URL:', config.googleAnalytics.id);
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: config.googleAnalytics.id,
    },
  });
});
