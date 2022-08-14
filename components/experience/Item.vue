<template>
  <li class="relative z-0 w-full">
    <ExperienceItemChildTimeline
      :is-child="isChild"
      :is-last="isLast"
    />
    <div class="flex justify-between leading-6">
      <span class="inline-flex flex-col flex-1 w-full">
        <span
          v-if="experience.company"
          class="flex font-bold"
        >
          {{ experience.company }}<!--<span :class="experience.accentColor">_</span>-->
        </span>
        <span class="flex flex-col-reverse flex-wrap items-start text-sm font-normal md:flex-row md:inline-flex text-zinc-400">
          <span>{{ experience.position }}</span>
          <span
            v-if="experience.contractType"
            class="inline-flex font-normal px-0.5 md:ml-1.5 rounded-sm text-xxxs border"
          >
            {{ experience.contractType }}
          </span>
        </span>
        <span class="flex flex-wrap w-full gap-2 mt-1 md:w-3/4">
          <span
            v-for="tech in experience.technologies"
            :key="tech"
            class="inline-flex text-xs text-[#00dc82] px-0.5 rounded-sm border"
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
