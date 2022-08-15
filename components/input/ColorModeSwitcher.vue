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
          class="block w-6 h-6 sun"
        />
      </Transition>
    </ColorScheme>
  </BaseButton>
</template>

<script setup lang="ts">
import IcSun from '@/assets/svg/IcSun.svg';
import IcMoon from '@/assets/svg/IcMoon.svg';

enum EColorMode {
  Dark = 'dark',
  Light = 'light',
  System = 'system',
}

const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === EColorMode.Dark);
const colorModeIcon = computed(() => isDarkMode.value ? IcSun : IcMoon);

const toggleMode = () => {
  colorMode.preference = isDarkMode.value ? EColorMode.Light : EColorMode.Dark;
};
</script>
