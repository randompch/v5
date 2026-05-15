<template>
  <footer class="relative flex w-full justify-center bg-white pt-10 dark:bg-slate-800">
    <div class="container max-w-6xl p-4">
      <div class="static bottom-24 left-10 my-4 flex w-auto justify-center space-x-4 text-slate-700 after:hidden dark:text-white xl:fixed xl:flex-col xl:space-x-0 xl:space-y-2 xl:after:absolute xl:after:bottom-0 xl:after:left-2.5 xl:after:block xl:after:h-36 xl:after:w-1 xl:after:translate-y-40 xl:after:bg-slate-700 xl:after:content-[''] dark:xl:after:bg-slate-300">
        <BaseLink
          v-for="(link, index) in socialLinks"
          :key="index"
          :alt="link.alt"
          :aria-label="link.alt"
          class="p-1 transition-colors hover:text-amber-400"
          :href="link.link"
          is-unstyled
          target="_blank"
        >
          <component
            :is="link.component"
            class="inline-flex size-4"
          />
        </BaseLink>
      </div>
      <ClientOnly>
        <p class="text-center text-xxs text-slate-700 dark:text-white">
          Coucou, petit perruche ! 🦜
        </p>
      </ClientOnly>
    </div>
  </footer>
</template>

<script setup lang='ts'>
import { useRuntimeConfig } from '#imports';
import BaseLink from './Link.vue';
import IcSend from '@/assets/svg/IcSend.svg';
// import IcDevCommunity from '@/assets/svg/IcDevCommunity.svg';
import IcGithub from '@/assets/svg/IcGithub.svg';
import IcLinkedin from '@/assets/svg/IcLinkedin.svg';
import IcMedium from '@/assets/svg/IcMedium.svg';
import IcStackoverflow from '@/assets/svg/IcStackoverflow.svg';
import { ESocialLink } from '@@/domain/portfolio/constants';

const { public: { email } } = useRuntimeConfig();

const socialLinks = [
  {
    alt: 'Email address',
    component: IcSend,
    link: `mailto:${email}`,
  },
  {
    alt: 'Linkedin profile',
    component: IcLinkedin,
    link: ESocialLink.LinkedIn,
  },
  {
    alt: 'Github profile',
    component: IcGithub,
    link: ESocialLink.Github,
  },
  {
    alt: 'StackOverflow profile',
    component: IcStackoverflow,
    link: ESocialLink.StackOverflow,
  },
  {
    alt: 'Medium profile',
    component: IcMedium,
    link: ESocialLink.Medium,
  },
  // {
  //   alt: 'Dev.to profile',
  //   component: IcDevCommunity,
  //   link: ESocialLink.Dev,
  // },
];
</script>
