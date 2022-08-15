<template>
  <a
    :alt="alt"
    :aria-label="alt"
    :class="{
      'relative group inline-block transition text-amber-400 cursor-pointer': !isUnstyled,
      'shadow-amber-400 hover:shadow-amber-400': isPrimary,
    }"
    :href="href"
  >
    <slot />
    <span class="block w-auto max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-amber-400" />
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
