<template>
  <header class="relative flex justify-center w-full pb-4 text-base bg-slate-50 dark:bg-slate-900 transition-colors min-h-[90vh] text-slate-700 dark:text-white">
    <InputColorModeSwitcher class="absolute top-10 right-10 z-10 xl:fixed xl:top-10 xl:right-10" />
    <div class="container max-w-6xl mt-[50vh] p-4">
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
            class="mr-2 font-medium text-amber-400 transition group"
            is-unstyled
            @click="toggleReadMore"
          >
            Read
            <span v-if="shouldDisplayProfileDetails">less</span>
            <span v-else>more</span>
            <span class="block w-auto max-w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:max-w-full" />
          </BaseButton>
          <p>
            Or see my experiences below<span class="text-amber-400">.</span>👇
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const shouldDisplayProfileDetails = ref(false);
const toggleReadMore = () => {
  shouldDisplayProfileDetails.value = !shouldDisplayProfileDetails.value;
};
</script>
