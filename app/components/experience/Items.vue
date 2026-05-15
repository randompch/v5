<template>
  <ul class="mt-4 w-full space-y-7">
    <ExperienceItem
      v-for="(experience, index) in experiences"
      :key="index"
      :experience="experience"
      :is-child="isChild"
      :is-last="index === experiences.length - 1"
    />
  </ul>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ExperienceItem from '@/components/experience/Item.vue';
import type { Experience } from '@@/domain/portfolio/types';

export default defineComponent({
  name: 'ExperienceItems',
  components: {
    ExperienceItem,
  },
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>
