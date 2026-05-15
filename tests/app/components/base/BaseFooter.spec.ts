import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseFooter from '@/components/base/BaseFooter.vue';

const stubI18n = {
  global: {
    mocks: { $t: (key: string): string => key },
  },
};

describe('BaseFooter', () => {
  it('renders one BaseLink per social entry', () => {
    const wrapper = shallowMount(BaseFooter, stubI18n);

    expect(wrapper.findAllComponents({ name: 'BaseLink' })).toHaveLength(5);
  });

  it('builds the mailto link from the runtime config email', () => {
    const wrapper = shallowMount(BaseFooter, stubI18n);

    const mailto = wrapper.findAllComponents({ name: 'BaseLink' })
      .find((link) => link.props('href')?.startsWith('mailto:'));
    expect(mailto?.props('href')).toBe('mailto:test@example.com');
  });
});
