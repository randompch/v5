<template>
  <span
    v-if="hasPeriod || experience.timeSpent"
    class="mt-0.5 flex flex-col items-end text-xs md:text-sm"
  >
    <span v-if="hasPeriod">
      {{ experience.startedAt }} - {{ experience.endedAt }}
    </span>
    <span
      v-if="experience.timeSpent"
      class="text-slate-400"
    >
      {{ experience.timeSpent }}
    </span>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import type { Experience } from '@@/domain/portfolio/types';

export default defineComponent({
  name: 'ExperienceItemPeriod',
  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },
  setup(props) {
    const hasPeriod = computed(() => !!props.experience?.startedAt && !!props.experience?.endedAt);

    return {
      hasPeriod,
    };
  },
});
</script>
