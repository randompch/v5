<template>
  <li class="relative z-0 w-full">
    <ExperienceItemChildTimeline
      :is-child="isChild"
      :is-last="isLast"
    />
    <div class="flex justify-between leading-6">
      <span class="inline-flex w-full flex-1 flex-col gap-2">
        <span class="inline-flex flex-col">
          <BaseLink
            v-if="experience?.company?.name"
            class="mr-auto font-bold"
            :href="experience.company.website"
            is-primary
          >
            {{ experience.company.name }}
          </BaseLink>
          <span
            v-if="experience?.company?.description"
            class="hidden text-sm text-slate-400 md:block"
          >
          {{ experience.company.description }}
          </span>
        </span>
        <span class="mt-2 flex flex-col flex-wrap items-start gap-1 text-sm font-normal text-slate-700 transition-colors dark:text-slate-300 md:inline-flex md:flex-row md:items-center md:gap-2">
          <span>{{ experience.position }}</span>
          <span
            v-if="experience.contractType"
            class="inline-flex select-none rounded-full border border-slate-400 px-1 py-px text-xxxs font-normal"
          >
            {{ experience.contractType }}
          </span>
        </span>
        <span class="mt-2 hidden w-full select-none flex-wrap gap-2 md:flex md:w-3/4">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="inline-flex rounded-sm border border-amber-400 px-1 py-px text-xs text-amber-400"
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
import type { Experience } from '@/types/interfaces/Experience.interface';

defineProps<{
  experience: Experience;
  isChild: boolean;
  isLast: boolean;
}>();
</script>
