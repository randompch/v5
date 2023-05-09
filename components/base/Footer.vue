<template>
  <footer class="relative flex justify-center w-full pt-10 bg-white dark:bg-slate-800">
    <div class="container max-w-6xl p-4">
      <div class="static w-auto flex justify-center my-4 space-x-4 text-slate-700 dark:text-white left-10 bottom-24 xl:fixed xl:flex-col xl:after:content-[''] xl:after:h-36 xl:after:w-1 xl:after:left-2.5 xl:after:bottom-0 xl:after:bg-slate-700 dark:xl:after:bg-slate-300 xl:after:translate-y-40 xl:after:absolute xl:after:block after:hidden xl:space-y-2 xl:space-x-0">
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
            class="inline-flex w-4 h-4"
          />
        </BaseLink>
      </div>
      <p class="text-center text-slate-700 dark:text-white text-xxs">
        {{ currentYear }}
      </p>
    </div>
  </footer>
</template>

<script setup lang='ts'>
import IcSend from '@/assets/svg/IcSend.svg';
// import IcDevCommunity from '@/assets/svg/IcDevCommunity.svg';
import IcGithub from '@/assets/svg/IcGithub.svg';
import IcLinkedin from '@/assets/svg/IcLinkedin.svg';
import IcMedium from '@/assets/svg/IcMedium.svg';
import IcStackoverflow from '@/assets/svg/IcStackoverflow.svg';
import { ESocialLink } from '@/types/enums/SocialLink.enum';

const { email } = useRuntimeConfig();

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

const currentYear = new Date().getFullYear();
</script>
