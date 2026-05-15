import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceItemChildTimeline from '@/components/experience/ExperienceItemChildTimeline.vue';

describe('ExperienceItemChildTimeline', () => {
  it('renders nothing when isChild is false', () => {
    const wrapper = mount(ExperienceItemChildTimeline, {
      props: { isChild: false },
    });

    expect(wrapper.findAll('span')).toHaveLength(0);
  });

  it('renders only the dot when the child is the last one', () => {
    const wrapper = mount(ExperienceItemChildTimeline, {
      props: { isChild: true, isLast: true },
    });

    expect(wrapper.findAll('span')).toHaveLength(1);
  });

  it('renders both the dot and the connecting line for non-last children', () => {
    const wrapper = mount(ExperienceItemChildTimeline, {
      props: { isChild: true, isLast: false },
    });

    expect(wrapper.findAll('span')).toHaveLength(2);
  });
});
