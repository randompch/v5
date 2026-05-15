import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it } from 'vitest';
import { colorModeState, resetColorMode } from '#imports';
import InputColorModeSwitcher from '@/components/input/InputColorModeSwitcher.vue';

beforeEach(() => {
  resetColorMode();
});

const stubChildren = {
  global: {
    stubs: {
      BaseButton: { template: '<button @click="$emit(`click`)"><slot /></button>', emits: ['click'] },
      ColorScheme: { template: '<div><slot /></div>' },
      transition: false,
    },
  },
};

describe('InputColorModeSwitcher', () => {
  it('renders a button wrapping the color mode icon', () => {
    const wrapper = mount(InputColorModeSwitcher, stubChildren);

    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('renders a single icon component', () => {
    const wrapper = mount(InputColorModeSwitcher, stubChildren);

    expect(wrapper.findAll('[data-test="svg-stub"]')).toHaveLength(1);
  });

  it('switches the preference to dark when clicked while in light mode', async () => {
    colorModeState.value = 'light';
    const wrapper = mount(InputColorModeSwitcher, stubChildren);

    await wrapper.get('button').trigger('click');

    expect(colorModeState.preference).toBe('dark');
  });
});
