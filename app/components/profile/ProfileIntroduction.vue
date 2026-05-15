<template>
  <div class="text-justify md:w-1/2">
    <h1 class="text-3xl font-bold text-slate-700 transition-colors dark:text-white">
      {{ $t('profile.introduction.greeting') }}<span class="text-amber-400">,</span>
    </h1>
    <p class="relative mt-3 font-normal">
      {{ $t('profile.introduction.bioFirst') }}
      <BaseLink
        alt="Selency website"
        href="https://selency.com"
        is-primary
      >
        Selency
      </BaseLink>.
      {{ $t('profile.introduction.bioSecond') }}
    </p>
    <p
      class="relative mt-6 after:absolute after:bottom-0 after:left-0 after:size-full after:bg-gradient-to-t after:from-slate-50 after:from-0% after:content-[''] dark:after:from-slate-900"
      :class="{
        'after:block': !shouldDisplayProfileDetails,
        'after:hidden': shouldDisplayProfileDetails,
      }"
    >
      {{ $t('profile.introduction.bioThird') }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseLink from '@/components/base/BaseLink.vue';

export default defineComponent({
  name: 'ProfileIntroduction',
  components: {
    BaseLink,
  },
  props: {
    shouldDisplayProfileDetails: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
