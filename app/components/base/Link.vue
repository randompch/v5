<template>
  <a
    :alt="alt"
    :aria-label="alt"
    :class="{
      'group relative inline-block cursor-pointer text-amber-400 transition': !isUnstyled,
      'shadow-amber-400 hover:shadow-amber-400': isPrimary,
    }"
    :href="href"
  >
    <slot />
    <span class="block h-0.5 w-auto max-w-0 bg-amber-400 transition-all duration-300 group-hover:max-w-full" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  isPrimary: {
    type: Boolean,
    default: false,
  },
  isUnstyled: {
    type: Boolean,
    default: false,
  },
});
</script>
