<template>
  <header class="relative flex min-h-[90vh] w-full justify-center bg-slate-50 pb-4 text-base text-slate-700 transition-colors dark:bg-slate-900 dark:text-white">
    <InputColorModeSwitcher class="absolute right-10 top-10 z-10 xl:fixed xl:right-10 xl:top-10" />
    <div class="container mt-[50vh] max-w-6xl p-4">
      <ProfileIntroduction :should-display-profile-details="shouldDisplayProfileDetails" />
      <div class="w-full">
        <ProfileDetails v-show="shouldDisplayProfileDetails" />
        <!-- <ProfileGithub /> -->
        <div
          class="flex flex-wrap"
          :class="{
            'mt-8': shouldDisplayProfileDetails,
          }"
        >
          <BaseButton
            class="group mr-2 font-medium text-amber-400 transition"
            is-unstyled
            @click="toggleReadMore"
          >
            Read
            <span v-if="shouldDisplayProfileDetails">less</span>
            <span v-else>more</span>
            <span class="block h-0.5 w-auto max-w-0 bg-amber-400 transition-all duration-300 group-hover:max-w-full" />
          </BaseButton>
          <p>
            Or see my experiences below<span class="text-amber-400">.</span>👇
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from './Button.vue';
import InputColorModeSwitcher from '../input/ColorModeSwitcher.vue';
import ProfileDetails from '../profile/Details.vue';
import ProfileIntroduction from '../profile/Introduction.vue';

const shouldDisplayProfileDetails = ref(false);
const toggleReadMore = () => {
  shouldDisplayProfileDetails.value = !shouldDisplayProfileDetails.value;
};
</script>
