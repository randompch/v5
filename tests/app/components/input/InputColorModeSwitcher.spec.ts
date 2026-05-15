import { shallowMount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { colorModeState, resetColorMode } from '#imports';
import InputColorModeSwitcher from '@/components/input/InputColorModeSwitcher.vue';

beforeEach(() => {
  resetColorMode();
});

describe('InputColorModeSwitcher', () => {
  it('renders a button wrapping the color mode icon', () => {
    const wrapper = shallowMount(InputColorModeSwitcher);

    expect(wrapper.findComponent({ name: 'BaseButton' }).exists()).toBe(true);
  });

  it('switches the preference to dark when clicked while in light mode', async () => {
    colorModeState.value = 'light';
    const wrapper = shallowMount(InputColorModeSwitcher);

    await wrapper.findComponent({ name: 'BaseButton' }).trigger('click');

    expect(colorModeState.preference).toBe('dark');
  });
});
