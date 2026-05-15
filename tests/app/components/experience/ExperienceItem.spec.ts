import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItem from '@/components/experience/ExperienceItem.vue';

const baseExperience = {
  company: {
    name: 'Selency',
    description: 'Second hand vintage furnitures (marketplace)',
    website: 'https://selency.com',
  },
  contractType: 'Full time',
  endedAt: 'Present.',
  position: 'Software engineer',
  startedAt: 'Feb 2022',
  timeSpent: '3 years',
  technologies: ['Typescript', 'Nuxt'],
};

describe('ExperienceItem', () => {
  it('points the company link at the company website', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    const link = wrapper.findComponent({ name: 'BaseLink' });
    expect(link.props('href')).toBe('https://selency.com');
  });

  it('renders the company description', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.text()).toContain('Second hand vintage furnitures (marketplace)');
  });

  it('renders the position and contract type', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.text()).toContain('Software engineer');
    expect(wrapper.text()).toContain('Full time');
  });

  it('renders one badge per technology', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    const techBadges = wrapper.findAll('span').filter((span) =>
      ['Typescript', 'Nuxt'].includes(span.text()),
    );
    expect(techBadges).toHaveLength(2);
  });

  it('hides the company block when neither name nor description are provided', () => {
    const experienceWithoutCompany = {
      ...baseExperience,
      company: { name: undefined, description: undefined, website: '' },
    };
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: experienceWithoutCompany, isChild: false, isLast: false },
    });

    expect(wrapper.findComponent({ name: 'BaseLink' }).exists()).toBe(false);
    expect(wrapper.text()).not.toContain('marketplace');
  });

  it('renders nested experiences when children are present', () => {
    const parentExperience = {
      ...baseExperience,
      children: [{ ...baseExperience, company: { name: 'Sub-role', description: '', website: '' } }],
    };
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: parentExperience, isChild: false, isLast: false },
    });

    expect(wrapper.findComponent({ name: 'ExperienceItems' }).exists()).toBe(true);
  });

  it('omits the nested experiences block when no children are present', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.findComponent({ name: 'ExperienceItems' }).exists()).toBe(false);
  });

  it('omits the contract type badge when contractType is empty', () => {
    const experienceWithoutContract = { ...baseExperience, contractType: '' };
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: experienceWithoutContract, isChild: false, isLast: false },
    });

    expect(wrapper.text()).not.toContain('Full time');
  });

  it('omits the technology badges when the list is empty', () => {
    const experienceWithoutTech = { ...baseExperience, technologies: [] };
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: experienceWithoutTech, isChild: false, isLast: false },
    });

    const techBadges = wrapper.findAll('span').filter((span) =>
      ['Typescript', 'Nuxt'].includes(span.text()),
    );
    expect(techBadges).toHaveLength(0);
  });

  it('drops the top margin on the meta row when the item is a child', () => {
    const wrapper = shallowMount(ExperienceItem, {
      props: { experience: baseExperience, isChild: true, isLast: false },
    });

    const metaRow = wrapper.findAll('span').find((span) =>
      span.classes().includes('flex-col') && span.text().includes('Software engineer'),
    );
    expect(metaRow?.classes()).not.toContain('mt-2');
  });
});
