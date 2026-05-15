<template>
  <div class="font-sans">
    <BaseHeader />
    <ExperienceMain />
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead, useRuntimeConfig } from '#imports';
import BaseFooter from '@/components/base/Footer.vue';
import BaseHeader from '@/components/base/Header.vue';
import ExperienceMain from '@/components/experience/Main.vue';
import { ESocialLink } from '@@/domain/portfolio/constants';

export default defineComponent({
  name: 'App',
  components: {
    BaseFooter,
    BaseHeader,
    ExperienceMain,
  },
  setup() {
    const config = useRuntimeConfig();
    const { app: { baseURL } } = config;

    useHead({
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Antoine Piché - Senior Software Engineer',
      link: [
        {
          rel: 'canonical',
          href: 'https://antoine-piche.com/',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: `${baseURL}fonts/CircularStd-Book.woff`,
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff',
          href: `${baseURL}fonts/CircularStd-Bold.woff`,
          crossorigin: 'anonymous',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${baseURL}favicon-32x32.png`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${baseURL}favicon-16x16.png`,
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${baseURL}favicon.ico`,
        },
      ],
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=1, minimum-scale=1.0',
        },
        {
          hid: 'description',
          name: 'description',
          content: `Antoine Piché is a Senior Software Engineer and Tech Lead with 10 years of experience`
            + ` in front-end architecture, based in Paris, France.`,
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
            jobTitle: 'Senior Software Engineer',
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
          src: `https://www.googletagmanager.com/gtag/js?id=G-${config.public.googleAnalyticsId}`,
          async: true,
        },
        {
          vmid: 'custom-gtag',
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-${config.public.googleAnalyticsId}');
        `,
          body: true,
        },
      ],
    });

    return {};
  },
});
</script>
