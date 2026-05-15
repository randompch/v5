<template>
  <button
    :class="{
      'relative inline-flex items-center justify-center border border-solid p-3 uppercase': !isUnstyled,
    }"
    data-testid="base-button"
    :disabled="isDisabled"
    :type="buttonType"
    @click="handleClick"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import type { ValueOf } from 'type-fest';
import { defineComponent } from 'vue';

const EButtonType = {
  Button: 'button',
  Submit: 'submit',
} as const;

type ButtonType = ValueOf<typeof EButtonType>;

export default defineComponent({
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String as () => ButtonType,
      default: EButtonType.Button,
      validator: (value: string): boolean => {
        return (Object.values(EButtonType) as string[]).includes(value);
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isUnstyled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event: Event): void {
      this.$emit('click', event);
    },
  },
});
</script>
