import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import InputColorModeSwitcher from '@/components/input/InputColorModeSwitcher.vue';

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
});
