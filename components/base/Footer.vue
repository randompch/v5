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
      <div class="text-center text-slate-700 dark:text-white text-xxs">
        <p>Antoine Piché - 2022</p>
      </div>
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

const socialLinks = [
  {
    alt: 'Email address',
    component: IcSend,
    link: 'mailto:antoinepiche@gmail.com',
  },
  {
    alt: 'Linkedin profile',
    component: IcLinkedin,
    link: 'https://www.linkedin.com/in/antoinepiche/',
  },
  {
    alt: 'Github profile',
    component: IcGithub,
    link: 'https://github.com/randompch',
  },
  {
    alt: 'StackOverflow profile',
    component: IcStackoverflow,
    link: 'https://stackoverflow.com/users/7262921/randxmpch',
  },
  {
    alt: 'Medium profile',
    component: IcMedium,
    link: 'https://medium.com/@randompiche',
  },
  // {
  //   alt: 'Dev.to profile',
  //   component: IcDevCommunity,
  //   link: 'https://dev.to/randompch',
  // },
];
</script>
