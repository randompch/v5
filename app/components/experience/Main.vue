<template>
  <section class="relative flex w-full justify-center bg-white py-4 text-slate-700 transition-colors dark:bg-slate-800 dark:text-white">
    <div class="container flex max-w-6xl flex-col gap-4 p-4 xl:flex-row xl:gap-10">
      <h2 class="mt-8 font-bold uppercase tracking-widest">
        Experiences
      </h2>
      <ExperienceItems
        class="mt-8 w-full"
        :experiences="experiences"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ExperienceItems from './Items.vue';
import { ECompany, EContractType, EPosition } from '@@/domain/portfolio/constants';

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDuration = (timeAgoInSeconds: number): void | { interval: number; epoch: string } => {
  for (const [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / parseInt(`${seconds}`));

    if (interval >= 1) {
      return {
        interval,
        epoch: name,
      };
    }
  }
};

const timeAgo = (date: string): string => {
  const timeAgoInSeconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  const { interval, epoch } = getDuration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';

  return `${interval} ${epoch}${suffix}`;
};

export default defineComponent({
  name: 'ExperienceMain',
  components: {
    ExperienceItems,
  },
  setup() {
    const experiences = computed(() => [
      {
        accentColor: 'text-[#b55f45]',
        company: {
          description: 'Second hand vintage furnitures (marketplace)',
          name: ECompany.Selency,
          website: 'https://selency.com',
        },
        contractType: EContractType.FullTime,
        endedAt: 'Present.',
        position: EPosition.SoftwareEngineer,
        startedAt: 'Feb 2022',
        timeSpent: timeAgo('2022-02-01'),
        technologies: ['Typescript', 'Nuxt 2', 'TailwindCSS 3', 'Jest', 'Cypress', 'Storybook', 'Symfony'],
      },
      {
        accentColor: 'text-[#ff566a]',
        company: {
          description: 'Fixed-cost real estate agency',
          name: ECompany.Liberkeys,
          website: 'https://www.liberkeys.com',
        },
        contractType: EContractType.FullTime,
        endedAt: 'Oct 2021',
        position: EPosition.FrontEndEngineer,
        startedAt: 'Jun 2021',
        timeSpent: '5 months',
        technologies: ['Typescript', 'Vue 2', 'Vue 3', 'TailwindCSS 2', 'Jest', 'Cypress', 'Storybook', 'Go'],
      },
      {
        accentColor: 'text-[#000000]',
        company: {
          description: 'Creative studio',
          name: ECompany.StudioBOP,
          website: 'https://studiobop.fr',
        },
        timeSpent: timeAgo('2018-05-01'),
        contractType: EContractType.Freelance,
        endedAt: 'Present.',
        position: EPosition.FullStackDeveloper,
        startedAt: 'May 2018',
        technologies: ['Wordpress'],
      },
      {
        accentColor: 'text-[#ff0032]',
        company: {
          description: 'Recruiting firm',
          name: ECompany.LaReleve,
          website: 'https://la-releve.com',
        },
        timeSpent: '3 years 4 months',
        technologies: ['Typescript', 'Nuxt 2', 'Node.js', 'Jest', 'Puppeteer', 'AWS Elastic Beanstalk', 'Terraform', 'Serverless'],
        children: [
          {
            accentColor: 'text-[#ff0032]',
            contractType: EContractType.FullTime,
            endedAt: 'Jun 2021',
            position: EPosition.FullStackDeveloper,
            startedAt: 'Sep 2019',
          },
          {
            accentColor: 'text-[#ff0032]',
            contractType: EContractType.Apprenticeship,
            endedAt: 'Aug 2019',
            position: EPosition.FullStackDeveloper,
            startedAt: 'Sep 2018',
          },
          {
            accentColor: 'text-[#ff0032]',
            contractType: EContractType.Internship,
            endedAt: 'Aug 2017',
            position: EPosition.FrontEndDeveloper,
            startedAt: 'Mar 2017',
          },
        ],
      },
      {
        accentColor: 'text-[#000000]',
        company: {
          description: 'Automatic background checking',
          name: ECompany.LVDF,
          website: 'https://lvdf.io',
        },
        timeSpent: '4 months',
        contractType: EContractType.Internship,
        endedAt: 'Jun 2017',
        position: EPosition.FrontEndDeveloper,
        startedAt: 'Mar 2017',
        technologies: ['jQuery', 'Twig', 'MJML'],
      },
      {
        accentColor: 'text-[#032e8a]',
        company: {
          description: 'Digital marketing agency dedicated to real estate developers',
          name: ECompany.AdnRealty,
          website: 'https://www.adn-realty.com',
        },
        contractType: EContractType.Apprenticeship,
        endedAt: 'Aug 2018',
        position: EPosition.FullStackDeveloper,
        startedAt: 'Sep 2017',
        technologies: ['HTML', 'CSS', 'ES5', 'jQuery', 'PHP 5'],
      },
      {
        accentColor: 'text-[#032e8a]',
        company: {
          description: 'Low-cost rental of commercial vehicles',
          name: ECompany.CityDrop,
          website: 'https://www.city-drop.com',
        },
        contractType: EContractType.Apprenticeship,
        endedAt: 'Jan 2018',
        position: EPosition.FrontEndDeveloper,
        startedAt: 'Nov 2017',
        technologies: ['HTML', 'CSS', 'ES5', 'PHP 5'],
      },
    ]);

    return {
      experiences,
    };
  },
});
</script>
