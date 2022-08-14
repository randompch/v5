<template>
  <button
    :class="{
      'relative inline-flex items-center justify-center p-3 uppercase border border-solid': !isUnstyled,
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
import { defineComponent } from 'vue';

enum EButtonType {
  Button = 'button',
  Submit = 'submit',
}

type ButtonType = `${EButtonType}`;

export default defineComponent({
  name: 'BaseButton',
  props: {
    buttonType: {
      type: String as () => ButtonType,
      default: EButtonType.Button,
      validator: (value: string): boolean => {
        return Object.values(EButtonType).includes(value as EButtonType);
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
