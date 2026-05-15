import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceMain from '@/components/experience/ExperienceMain.vue';

const stubI18n = {
  global: {
    mocks: { $t: (key: string): string => key },
  },
};

describe('ExperienceMain', () => {
  it('renders the section title via i18n key', () => {
    const wrapper = shallowMount(ExperienceMain, stubI18n);

    expect(wrapper.text()).toContain('experience.sectionTitle');
  });

  it('passes the experiences list down to ExperienceItems', () => {
    const wrapper = shallowMount(ExperienceMain, stubI18n);

    const items = wrapper.findComponent({ name: 'ExperienceItems' });
    const experiences = items.props('experiences') as unknown[];
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });
});
