import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItem from '@/components/experience/ExperienceItem.vue';

const stubChildren = {
  global: {
    stubs: {
      BaseLink: { props: ['href'], template: '<a :href="href"><slot /></a>' },
      ExperienceItemChildTimeline: true,
      ExperienceItemPeriod: { template: '<span data-test="period" />' },
      ExperienceItems: { template: '<ul data-test="children" />' },
    },
  },
};

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
  it('renders the company name as a link pointing to the company website', () => {
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    const link = wrapper.get('a');
    expect(link.text()).toContain('Selency');
    expect(link.attributes('href')).toBe('https://selency.com');
  });

  it('renders the company description', () => {
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.text()).toContain('Second hand vintage furnitures (marketplace)');
  });

  it('renders the position and contract type', () => {
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.text()).toContain('Software engineer');
    expect(wrapper.text()).toContain('Full time');
  });

  it('renders one badge per technology', () => {
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
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
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: experienceWithoutCompany, isChild: false, isLast: false },
    });

    expect(wrapper.find('a').exists()).toBe(false);
    expect(wrapper.text()).not.toContain('marketplace');
  });

  it('renders nested experiences when children are present', () => {
    const parentExperience = {
      ...baseExperience,
      children: [{ ...baseExperience, company: { name: 'Sub-role', description: '', website: '' } }],
    };
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: parentExperience, isChild: false, isLast: false },
    });

    expect(wrapper.find('[data-test="children"]').exists()).toBe(true);
  });

  it('omits the nested experiences block when no children are present', () => {
    const wrapper = mount(ExperienceItem, {
      ...stubChildren,
      props: { experience: baseExperience, isChild: false, isLast: false },
    });

    expect(wrapper.find('[data-test="children"]').exists()).toBe(false);
  });
});
