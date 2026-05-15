<template>
  <BaseButton
    class="p-2 text-center"
    is-unstyled
    @click="toggleMode"
  >
    <ColorScheme>
      <Transition
        appear
        mode="out-in"
        name="fade"
      >
        <component
          :is="colorModeIcon"
          class="block size-6"
        />
      </Transition>
    </ColorScheme>
  </BaseButton>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useColorMode } from '#imports';
import BaseButton from '@/components/base/Button.vue';
import IcSun from '@/assets/svg/IcSun.svg';
import IcMoon from '@/assets/svg/IcMoon.svg';

const EColorMode = {
  Dark: 'dark',
  Light: 'light',
  System: 'system',
} as const;

export default defineComponent({
  name: 'InputColorModeSwitcher',
  components: {
    BaseButton,
  },
  setup() {
    const colorMode = useColorMode();
    const isDarkMode = computed(() => colorMode.value === EColorMode.Dark);
    const colorModeIcon = computed(() => isDarkMode.value ? IcSun : IcMoon);

    const toggleMode = (): void => {
      colorMode.preference = isDarkMode.value ? EColorMode.Light : EColorMode.Dark;
    };

    return {
      colorModeIcon,
      toggleMode,
    };
  },
});
</script>
