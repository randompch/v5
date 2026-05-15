<template>
  <div class="text-justify md:w-1/2">
    <h1 class="text-3xl font-bold transition-colors text-slate-700 dark:text-white">
      Hi there! 👋 I'm Antoine<span class="text-amber-400">,</span>
    </h1>
    <p class="relative mt-3 font-normal">
      I'm a product-minded Senior Software Engineer and Tech Lead with 10 years of experience
      and deep expertise in front-end architecture, based in Paris, France 🇫🇷,
      currently at
      <BaseLink
        alt="Selency website"
        href="https://selency.com"
        is-primary
      >
        Selency
      </BaseLink>.
      I lead the design and evolution of scalable web products, helping teams turn complex
      product and engineering challenges into simple, reliable and scalable solutions.
    </p>
    <p
      class="relative mt-6 after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-gradient-to-t after:from-0% after:from-slate-50 dark:after:from-slate-900"
      :class="{
        'after:block': !shouldDisplayProfileDetails,
        'after:hidden': shouldDisplayProfileDetails,
      }"
    >
      My work spans the full front-end lifecycle, from system design and SSR strategy
      to performance, testing, production reliability and long-term maintainability.
      I care deeply about code quality, documentation and engineering practices
      that help teams move faster with clarity and confidence.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  shouldDisplayProfileDetails: boolean;
}>();
</script>
