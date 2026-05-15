import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ProfileIntroduction from '@/components/profile/ProfileIntroduction.vue';

const stubI18n = {
  global: {
    mocks: { $t: (key: string): string => key },
  },
};

describe('ProfileIntroduction', () => {
  it('renders the greeting and the two short bio fragments when collapsed', () => {
    const wrapper = shallowMount(ProfileIntroduction, {
      ...stubI18n,
      props: { shouldDisplayProfileDetails: false },
    });

    expect(wrapper.text()).toContain('profile.introduction.greeting');
    expect(wrapper.text()).toContain('profile.introduction.bioFirst');
    expect(wrapper.text()).toContain('profile.introduction.bioSecond');
    expect(wrapper.text()).not.toContain('profile.introduction.bioThird');
  });

  it('reveals the full bio when expanded', () => {
    const wrapper = shallowMount(ProfileIntroduction, {
      ...stubI18n,
      props: { shouldDisplayProfileDetails: true },
    });

    expect(wrapper.text()).toContain('profile.introduction.bioThird');
  });

  it('shows the fade overlay when the profile details panel is collapsed', () => {
    const wrapper = shallowMount(ProfileIntroduction, {
      ...stubI18n,
      props: { shouldDisplayProfileDetails: false },
    });

    const fadedSection = wrapper.findAll('div')[1];
    expect(fadedSection.classes()).toContain('after:block');
  });

  it('hides the fade overlay when the profile details panel is expanded', () => {
    const wrapper = shallowMount(ProfileIntroduction, {
      ...stubI18n,
      props: { shouldDisplayProfileDetails: true },
    });

    const fadedSection = wrapper.findAll('div')[1];
    expect(fadedSection.classes()).toContain('after:hidden');
  });
});
