<template>
  <a
    class="flex flex-row flex-wrap w-full gap-2"
    href="https://github.com/randompch"
    target="_blank"
  >
    <img
      alt="Randompch Github stats"
      class="w-full md:w-auto"
      :src="statsURL"
    >
    <img
      alt="Randompch Github stats"
      class="w-full md:w-auto"
      :src="topLangsURL"
    >
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const baseURL = 'https://github-readme-stats-beryl-ten.vercel.app/api';

const commonThemeOptions = {
  bg_color: null,
  border_radius: 5,
  line_height: 24,
  // theme: ,
  border_color: 'f5f5f5',
  icon_color: '2eec96',
  show_icons: true,
  text_color: '3f3f46',
  title_color: '3f3f46',
};

const statsURL = computed(() => {
  const params = new URLSearchParams({
    ...commonThemeOptions,
    cache_seconds: 86400,
    count_private: true,
    custom_title: 'Randompch\'s Github Stats',
    disable_animations: true,
    hide_border: true,
    hide_rank: true,
    hide_title: false,
    hide: 'stars,contribs',
    include_all_commits: true,
    locale: 'en',
    username: 'randompch',
  });

  return `${baseURL}?${params.toString()}`;
});

const topLangsURL = computed(() => {
  const params = new URLSearchParams({
    ...commonThemeOptions,
    hide_title: false,
    hide: 'css,scss,php,kotlin,html',
    layout: 'compact',
    username: 'randompch',
    langs_count: 4,
  });

  return `${baseURL}/top-langs?${params.toString()}`;
});
</script>
