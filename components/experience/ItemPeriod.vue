<template>
  <span
    v-if="hasPeriod || experience.timeSpent"
    class="mt-0.5 flex flex-col items-end text-xs md:text-sm"
  >
    <span v-if="hasPeriod">
      {{ experience.startedAt }} - {{ experience.endedAt }}
    </span>
    <span v-if="experience.timeSpent">
      {{ experience.timeSpent }}
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Experience } from '@/types/interfaces/Experience.interface';

const props = defineProps<{
  experience: Experience;
}>();

const hasPeriod = computed(() => {
  return !!props.experience?.startedAt && !!props.experience?.endedAt;
});
</script>
