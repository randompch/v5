import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BaseButton from '@/components/base/BaseButton.vue';

describe('BaseButton', () => {
  it('renders the slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click me' },
    });

    expect(wrapper.text()).toContain('Click me');
  });

  it('emits a click event with the native event payload', async () => {
    const wrapper = mount(BaseButton);

    await wrapper.get('button').trigger('click');

    const clickEvents = wrapper.emitted('click');
    expect(clickEvents).toBeDefined();
    expect(clickEvents?.[0]?.[0]).toBeInstanceOf(Event);
  });

  it('disables the underlying button when isDisabled is true', () => {
    const wrapper = mount(BaseButton, {
      props: { isDisabled: true },
    });

    expect(wrapper.get('button').attributes('disabled')).toBeDefined();
  });

  it('uses button as the default html type', () => {
    const wrapper = mount(BaseButton);

    expect(wrapper.get('button').attributes('type')).toBe('button');
  });
});
