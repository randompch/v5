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
            {{ $t('header.readPrefix') }}
            <span v-if="shouldDisplayProfileDetails">{{ $t('header.readLess') }}</span>
            <span v-else>{{ $t('header.readMore') }}</span>
            <span class="block h-0.5 w-auto max-w-0 bg-amber-400 transition-all duration-300 group-hover:max-w-full" />
          </BaseButton>
          <p>
            {{ $t('header.experiencesHint') }}<span class="text-amber-400">.</span>👇
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';
import InputColorModeSwitcher from '@/components/input/InputColorModeSwitcher.vue';
import ProfileDetails from '@/components/profile/ProfileDetails.vue';
import ProfileIntroduction from '@/components/profile/ProfileIntroduction.vue';

export default defineComponent({
  name: 'BaseHeader',
  components: {
    BaseButton,
    InputColorModeSwitcher,
    ProfileDetails,
    ProfileIntroduction,
  },
  setup() {
    const shouldDisplayProfileDetails = ref(false);
    const toggleReadMore = (): void => {
      shouldDisplayProfileDetails.value = !shouldDisplayProfileDetails.value;
    };

    return {
      shouldDisplayProfileDetails,
      toggleReadMore,
    };
  },
});
</script>
