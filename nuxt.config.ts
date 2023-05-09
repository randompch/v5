import eslintPlugin from 'vite-plugin-eslint';
import { ESocialLink } from './types/enums/SocialLink.enum';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Antoine Piché - Front-end Engineer (TypeScript)',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Antoine Piché is a Front-end Engineer (Typescript) and VueJS enthusiast based in France',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Person',
          name: 'Antoine Piché',
          url: 'https://antoine-piche.com/',
          jobTitle: 'Front-end Engineer',
          image: 'https://media.licdn.com/dms/image/C5603AQE7d7YzGP_7eA/profile-displayphoto-shrink_400_400/0/1545685433838?e=1689206400&v=beta&t=AW0iunh6Dh_4RKLs5nIVBskZhG3-KTo4gGVwWauORF8',
          sameAs: [
            ESocialLink.LinkedIn,
            ESocialLink.Github,
            ESocialLink.StackOverflow,
            ESocialLink.Medium,
          ],
        },
      },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-${process.env.GOOGLE_TAG_ID}`,
        async: true,
      },
      {
        vmid: 'custom-gtag',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-${process.env.GOOGLE_TAG_ID}');
        `,
        body: true,
      },
    ],
  },
  colorMode: {
    classSuffix: '',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
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
