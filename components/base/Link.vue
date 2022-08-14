<template>
  <a
    :alt="alt"
    :aria-label="alt"
    :class="{
      'relative inline-block transition cursor-pointer shadow-base hover:text-zinc-700 dark:hovertext-white hover:shadow-expanded': !isUnstyled,
      'shadow-emerald-450 hover:shadow-emerald-450': isPrimary,
    }"
    :href="href"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
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
  },
});
</script>
