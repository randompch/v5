import { vi } from 'vitest';

// Nuxt's virtual #imports module is not available in plain Vitest;
// stub the composables our components actually pull from it.
vi.mock('#imports', () => ({
  useRuntimeConfig: () => ({
    public: {
      email: 'test@example.com',
      googleAnalyticsId: 'TEST',
    },
    app: {
      baseURL: '/',
    },
  }),
  useHead: vi.fn(),
  useColorMode: () => ({
    value: 'light',
    preference: 'light',
  }),
}));
