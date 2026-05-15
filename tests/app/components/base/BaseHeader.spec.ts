import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseHeader from '@/components/base/BaseHeader.vue';

const stubI18n = {
  global: {
    mocks: { $t: (key: string): string => key },
  },
};

describe('BaseHeader', () => {
  it('starts with the profile details collapsed', () => {
    const wrapper = shallowMount(BaseHeader, stubI18n);

    expect(wrapper.text()).toContain('header.readPrefix');
    expect(wrapper.text()).toContain('header.readMore');
    expect(wrapper.text()).not.toContain('header.readLess');
  });

  it('toggles to the expanded state when the read-more button emits click', async () => {
    const wrapper = shallowMount(BaseHeader, stubI18n);

    await wrapper.findComponent({ name: 'BaseButton' }).trigger('click');

    expect(wrapper.text()).toContain('header.readLess');
    expect(wrapper.text()).not.toContain('header.readMore');
  });

  it('toggles back to collapsed on a second click', async () => {
    const wrapper = shallowMount(BaseHeader, stubI18n);

    const button = wrapper.findComponent({ name: 'BaseButton' });
    await button.trigger('click');
    await button.trigger('click');

    expect(wrapper.text()).toContain('header.readMore');
  });
});
