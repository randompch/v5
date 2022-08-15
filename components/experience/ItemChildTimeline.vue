<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <span
    v-if="isChild"
    class="absolute z-10 block w-1.5 h-1.5 rounded-full -left-3.5 bg-slate-300 top-2"
  />
  <span
    v-if="isChild && !isLast"
    class="absolute z-0 block w-px h-[48px] md:h-[34px] -left-[11.5px] bg-slate-200 top-5"
  />
</template>

<script setup lang="ts">
defineProps({
  isChild: {
    type: Boolean,
    default: false,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
});
</script>
