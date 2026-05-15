import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProfileDetails from '@/components/profile/ProfileDetails.vue';

const stubI18n = {
  global: {
    mocks: {
      $t: (key: string): string => key,
    },
  },
};

describe('ProfileDetails', () => {
  it('renders the looking-for and call-to-action paragraphs', () => {
    const wrapper = mount(ProfileDetails, stubI18n);

    const paragraphs = wrapper.findAll('p');
    expect(paragraphs).toHaveLength(2);
    expect(paragraphs[0].text()).toBe('profile.details.lookingFor');
    expect(paragraphs[1].text()).toBe('profile.details.callToAction');
  });
});
