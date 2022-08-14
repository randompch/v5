<template>
  <ul class="w-full mt-4 space-y-6">
    <ExperienceItem
      v-for="(experience, index) in experiences"
      :key="index"
      :experience="experience"
      :is-child="isChild"
      :is-last="index === experiences.length - 1"
    />
  </ul>
</template>
<script setup lang="ts">
defineProps({
  experiences: {
    type: Array,
    required: true,
  },
  isChild: {
    type: Boolean,
    default: false,
  },
});
</script>
