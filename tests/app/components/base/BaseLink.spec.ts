import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseLink from '@/components/base/BaseLink.vue';

describe('BaseLink', () => {
  it('renders the slot content', () => {
    const wrapper = mount(BaseLink, {
      slots: { default: 'Hello' },
    });

    expect(wrapper.text()).toContain('Hello');
  });

  it('forwards href and alt to the anchor', () => {
    const wrapper = mount(BaseLink, {
      props: { href: 'https://example.com', alt: 'Example' },
    });

    const anchor = wrapper.get('a');
    expect(anchor.attributes('href')).toBe('https://example.com');
    expect(anchor.attributes('alt')).toBe('Example');
    expect(anchor.attributes('aria-label')).toBe('Example');
  });

  it('applies primary styling when isPrimary is true', () => {
    const wrapper = mount(BaseLink, {
      props: { isPrimary: true },
    });

    expect(wrapper.classes()).toContain('shadow-amber-400');
  });

  it('drops default styling when isUnstyled is true', () => {
    const wrapper = mount(BaseLink, {
      props: { isUnstyled: true },
    });

    expect(wrapper.classes()).not.toContain('text-amber-400');
  });
});
