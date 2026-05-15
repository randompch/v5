import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseFooter from '@/components/base/BaseFooter.vue';

const stubI18n = {
  global: {
    mocks: { $t: (key: string): string => key },
    stubs: {
      BaseLink: {
        props: ['href'],
        template: '<a :href="href"><slot /></a>',
      },
      ClientOnly: { template: '<div><slot /></div>' },
    },
  },
};

describe('BaseFooter', () => {
  it('renders one BaseLink per social entry', () => {
    const wrapper = mount(BaseFooter, stubI18n);

    expect(wrapper.findAll('a')).toHaveLength(5);
  });

  it('builds the mailto link from the runtime config email', () => {
    const wrapper = mount(BaseFooter, stubI18n);

    const mailto = wrapper.findAll('a').find((link) => link.attributes('href')?.startsWith('mailto:'));
    expect(mailto?.attributes('href')).toBe('mailto:test@example.com');
  });

  it('renders the easter-egg text under ClientOnly', () => {
    const wrapper = mount(BaseFooter, stubI18n);

    expect(wrapper.text()).toContain('footer.easterEgg');
  });
});
