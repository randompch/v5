import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItems from '@/components/experience/ExperienceItems.vue';
import type { Experience } from '@@/domain/portfolio/types';

const makeExperience = (overrides: Partial<Experience> = {}): Experience => ({
  company: { name: 'Selency', description: '' },
  contractType: 'Full time',
  endedAt: '',
  position: 'Software engineer',
  startedAt: '',
  timeSpent: '',
  ...overrides,
});

describe('ExperienceItems', () => {
  it('renders one ExperienceItem per experience in the list', () => {
    const wrapper = shallowMount(ExperienceItems, {
      props: {
        experiences: [makeExperience(), makeExperience(), makeExperience()],
      },
    });

    expect(wrapper.findAllComponents({ name: 'ExperienceItem' })).toHaveLength(3);
  });

  it('renders an empty list when the experiences array is empty', () => {
    const wrapper = shallowMount(ExperienceItems, {
      props: { experiences: [] },
    });

    expect(wrapper.findAllComponents({ name: 'ExperienceItem' })).toHaveLength(0);
  });
});
