<template>
  <section class="relative flex justify-center w-full py-4 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-white">
    <div class="container max-w-6xl p-4">
      <h2 class="font-bold uppercase">
        Experiences
      </h2>
      <ExperienceItems
        class="mt-8 md:w-2/3 lg:w-2/3"
        :experiences="experiences"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ECompany } from '@/types/enums/Company.enum';
import { EContractType } from '@/types/enums/ContractType.enum';
import { EPosition } from '@/types/enums/Position.enum';

const epochs = [
  ['year', 31536000],
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDuration = (timeAgoInSeconds: number) => {
  for (const [name, seconds] of epochs) {
    const interval = Math.floor(timeAgoInSeconds / parseInt(seconds));

    if (interval >= 1) {
      return {
        interval,
        epoch: name,
      };
    }
  }
};

const timeAgo = (date) => {
  const timeAgoInSeconds = Math.floor((new Date() - new Date(date)) / 1000);
  const { interval, epoch } = getDuration(timeAgoInSeconds);
  const suffix = interval === 1 ? '' : 's';

  return `${interval} ${epoch}${suffix}`;
};

console.log(timeAgo('2022-02-01'));

const experiences = computed(() => [
  {
    accentColor: 'text-[#b55f45]',
    company: ECompany.Selency,
    contractType: EContractType.FullTime,
    endedAt: 'Present.',
    position: EPosition.FrontEndEngineer,
    startedAt: 'Feb 2022',
    timeSpent: timeAgo('2022-02-01'),
    technologies: ['Nuxt 2.16'],
  },
  {
    accentColor: 'text-[#ff566a]',
    company: ECompany.Liberkeys,
    contractType: EContractType.FullTime,
    endedAt: 'Oct 2021',
    position: EPosition.FrontEndEngineer,
    startedAt: 'Jun 2021',
    timeSpent: '5 months',
    technologies: ['Vue 2', 'Vue 3'],
  },
  {
    accentColor: 'text-[#ff0032]',
    company: ECompany.LaReleve,
    timeSpent: '3 years 4 months',
    technologies: ['Typescript', 'Nuxt 2.13', 'Node.js', 'Jest', 'Puppeteer', 'AWS Elastic Beanstalk', 'Terraform', 'Serverless'],
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
    company: ECompany.StudioBOP,
    timeSpent: timeAgo('2018-05-01'),
    contractType: EContractType.Freelance,
    endedAt: 'Present.',
    position: EPosition.FullStackDeveloper,
    startedAt: 'May 2018',
    technologies: ['Wordpress'],
  },
  {
    accentColor: 'text-[#032e8a]',
    company: ECompany.AdnRealty,
    contractType: EContractType.Apprenticeship,
    endedAt: 'Aug 2018',
    position: EPosition.FullStackDeveloper,
    startedAt: 'Sep 2017',
    technologies: ['HTML', 'CSS', 'Javascript ES5', 'PHP 5'],
  },
]);
</script>
