<template>
  <footer class="relative flex justify-center w-full">
    <div class="container max-w-6xl mt-[40vh] p-4">
      <div class="flex justify-center w-full my-4 space-x-3 text-black">
        <BaseLink
          v-for="(link, index) in socialLinks"
          :key="index"
          :alt="link.alt"
          :aria-label="link.alt"
          :href="link.link"
          is-unstyled
          target="_blank"
        >
          <component :is="link.component" class="inline-flex w-4 h-4" />
        </BaseLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang='ts'>
import IcSend from '@/assets/svg/IcSend.svg';
import IcDevCommunity from '@/assets/svg/IcDevCommunity.svg';
import IcGithub from '@/assets/svg/IcGithub.svg';
import IcLinkedin from '@/assets/svg/IcLinkedin.svg';
import IcMedium from '@/assets/svg/IcMedium.svg';
import IcStackoverflow from '@/assets/svg/IcStackoverflow.svg';

const socialLinks = [
  { link: 'mailto:antoinepiche@gmail.com', alt: 'email address', component: IcSend },
  { link: 'https://www.linkedin.com/in/antoinepiche/', alt: 'Linkedin profile', component: IcLinkedin },
  { link: 'https://github.com/randompch', alt: 'Github profile', component: IcGithub },
  { link: 'https://medium.com/@randompiche', alt: 'Medium profile', component: IcMedium },
  { link: 'https://dev.to/randompiche', alt: 'Dev.to profile', component: IcDevCommunity },
  { link: 'https://stackoverflow.com/users/7262921/randxmpch', alt: 'StackOverflow profile', component: IcStackoverflow },
];
</script>
