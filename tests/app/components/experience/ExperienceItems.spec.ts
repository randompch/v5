import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItems from '@/components/experience/ExperienceItems.vue';
import type { Experience } from '@@/domain/portfolio/types';

const stubChildren = {
  global: {
    mocks: { $t: (key: string): string => key },
    stubs: { ExperienceItem: { template: '<li data-test="item" />' } },
  },
};

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
  it('renders one item per experience in the list', () => {
    const wrapper = mount(ExperienceItems, {
      ...stubChildren,
      props: {
        experiences: [makeExperience(), makeExperience(), makeExperience()],
      },
    });

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(3);
  });

  it('renders an empty list when the experiences array is empty', () => {
    const wrapper = mount(ExperienceItems, {
      ...stubChildren,
      props: { experiences: [] },
    });

    expect(wrapper.findAll('[data-test="item"]')).toHaveLength(0);
  });
});
