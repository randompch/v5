<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <span
    v-if="isChild"
    class="absolute -left-3.5 top-2 z-10 block size-1.5 rounded-full bg-slate-300"
  />
  <span
    v-if="isChild && !isLast"
    class="absolute left-[-11.5px] top-5 z-0 block h-[48px] w-px bg-slate-200 md:h-[34px]"
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
