<template>
  <div class="font-sans">
    <BaseHeader />
    <ExperienceMain />
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import { ESocialLink } from './types/enums/SocialLink.enum';
const config = useRuntimeConfig();

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Antoine Piché - Front-end Engineer (TypeScript)',
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=1, minimum-scale=1.0',
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Antoine Piché is a Front-end Engineer (Typescript) and VueJS enthusiast based in France',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'canonical',
      href: 'https://antoine-piche.com/',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Antoine Piché',
        url: 'https://antoine-piche.com/',
        jobTitle: 'Front-end Engineer',
        image: 'https://antoine-piche.com/profile_picture.jpeg',
        sameAs: [
          ESocialLink.LinkedIn,
          ESocialLink.Github,
          ESocialLink.StackOverflow,
          ESocialLink.Medium,
        ],
      }),
    },
    {
      src: `https://www.googletagmanager.com/gtag/js?id=G-${config.googleAnalyticsId}`,
      async: true,
    },
    {
      vmid: 'custom-gtag',
      innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-${config.googleAnalyticsId}');
        `,
      body: true,
    },
  ],
});
</script>
