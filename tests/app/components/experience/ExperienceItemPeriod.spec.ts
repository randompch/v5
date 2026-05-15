import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItemPeriod from '@/components/experience/ExperienceItemPeriod.vue';
import type { Experience } from '@@/domain/portfolio/types';

const baseExperience: Experience = {
  company: { name: 'Selency', description: '' },
  contractType: 'Full time',
  endedAt: '',
  position: 'Software engineer',
  startedAt: '',
  timeSpent: '',
};

describe('ExperienceItemPeriod', () => {
  it('renders nothing when neither dates nor timeSpent are provided', () => {
    const wrapper = mount(ExperienceItemPeriod, {
      props: { experience: { ...baseExperience } },
    });

    expect(wrapper.find('span').exists()).toBe(false);
  });

  it('renders the date range when both startedAt and endedAt are provided', () => {
    const wrapper = mount(ExperienceItemPeriod, {
      props: {
        experience: { ...baseExperience, startedAt: 'Feb 2022', endedAt: 'Present.' },
      },
    });

    expect(wrapper.text()).toContain('Feb 2022 - Present.');
  });

  it('renders the timeSpent string when provided', () => {
    const wrapper = mount(ExperienceItemPeriod, {
      props: {
        experience: { ...baseExperience, timeSpent: '3 years' },
      },
    });

    expect(wrapper.text()).toContain('3 years');
  });

  it('does not render the date range when only one of the two bounds is set', () => {
    const wrapper = mount(ExperienceItemPeriod, {
      props: {
        experience: { ...baseExperience, startedAt: 'Feb 2022', timeSpent: '3 years' },
      },
    });

    expect(wrapper.text()).not.toContain('Feb 2022');
    expect(wrapper.text()).toContain('3 years');
  });
});
