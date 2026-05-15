import { config } from '@vue/test-utils';

// Render the default slot of stubbed components so shallowMount tests
// can still assert on slotted content (e.g. company name inside BaseLink).
config.global.renderStubDefaultSlot = true;
