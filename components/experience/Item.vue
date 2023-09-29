<template>
  <li class="relative z-0 w-full">
    <ExperienceItemChildTimeline
      :is-child="isChild"
      :is-last="isLast"
    />
    <div class="flex justify-between leading-6">
      <span class="inline-flex flex-col flex-1 w-full">
        <span class="inline-flex items-baseline">
          <BaseLink
            v-if="experience?.company?.name"
            class="mb-1 font-bold"
            :href="experience.company.website"
            is-primary
          >
            {{ experience.company.name }}
          </BaseLink>
          <span
            v-if="experience?.company?.description"
            class="hidden ml-1 text-sm md:inline-flex text-slate-400"
          >
            - {{ experience.company.description }}
          </span>
        </span>
        <span class="flex flex-col flex-wrap items-start gap-1 text-sm font-normal transition-colors md:flex-row md:items-center md:inline-flex md:gap-2 text-slate-700 dark:text-slate-300">
          <span>{{ experience.position }}</span>
          <span
            v-if="experience.contractType"
            class="inline-flex px-1 py-px font-normal border rounded-full select-none border-slate-400 text-xxxs"
          >
            {{ experience.contractType }}
          </span>
        </span>
        <span class="flex-wrap hidden w-full gap-2 mt-2 select-none md:flex md:w-3/4">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="inline-flex px-1 py-px text-xs border rounded-sm text-amber-400 border-amber-400"
          >
            {{ tech }}
          </span>
        </span>
      </span>
      <ExperienceItemPeriod :experience="experience" />
    </div>
    <template v-if="experience.children">
      <ExperienceItems
        class="pl-7"
        :experiences="experience.children"
        is-child
      />
    </template>
  </li>
</template>

<script setup lang="ts">
import { Experience } from '@/types/interfaces/Experience.interface';

defineProps<{
  experience: Experience;
  isChild: boolean;
  isLast: boolean;
}>();
</script>
