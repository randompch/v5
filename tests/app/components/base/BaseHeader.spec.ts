import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseHeader from '@/components/base/BaseHeader.vue';

const stubI18n = {
  global: {
    mocks: {
      $t: (key: string): string => key,
    },
    stubs: {
      InputColorModeSwitcher: true,
      ProfileIntroduction: true,
      ProfileDetails: true,
    },
  },
};

describe('BaseHeader', () => {
  it('starts with the profile details collapsed', () => {
    const wrapper = mount(BaseHeader, stubI18n);

    expect(wrapper.text()).toContain('header.readPrefix');
    expect(wrapper.text()).toContain('header.readMore');
    expect(wrapper.text()).not.toContain('header.readLess');
  });

  it('toggles to the expanded state when the read-more button is clicked', async () => {
    const wrapper = mount(BaseHeader, stubI18n);

    await wrapper.get('button').trigger('click');

    expect(wrapper.text()).toContain('header.readLess');
    expect(wrapper.text()).not.toContain('header.readMore');
  });

  it('toggles back to collapsed on a second click', async () => {
    const wrapper = mount(BaseHeader, stubI18n);

    await wrapper.get('button').trigger('click');
    await wrapper.get('button').trigger('click');

    expect(wrapper.text()).toContain('header.readMore');
  });
});
