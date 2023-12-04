<template>
  <div class="text-justify md:w-1/2">
    <h1 class="text-3xl font-bold transition-colors text-slate-700 dark:text-white">
      Hi there! 👋 I'm Antoine<span class="text-amber-400">,</span>
    </h1>
    <p class="relative mt-3 font-normal">
      a front-end engineer and Vue.js enthusiast <br>based in Paris, France 🇫🇷,
      currently working at
      <BaseLink
        alt="Selency website"
        href="https://selency.com"
        is-primary
      >
        Selency
      </BaseLink>.
      <span class="transition-colors text-slate-400 dark:text-slate-400">
        <br> I'm passionate about creating clear, accessible interfaces
        <br> and writing clean, maintainable code.
      </span>
    </p>
    <p
      class="relative mt-9 after:absolute after:bottom-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-gradient-to-t after:from-0% after:from-slate-50 dark:after:from-slate-900"
      :class="{
        'after:block': !shouldDisplayProfileDetails,
        'after:hidden': shouldDisplayProfileDetails,
      }"
    >
      I'm also someone who deeply cares about our environment and the impact we have on it.
      I believe technology can (sometimes) be a force for good in mitigating our negative impact on ecosystems. 🌱
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  shouldDisplayProfileDetails: boolean;
}>();
</script>
