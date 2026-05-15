import { vi } from 'vitest';

export const useRuntimeConfig = (): {
  public: { email: string; googleAnalyticsId: string };
  app: { baseURL: string };
} => ({
  public: {
    email: 'test@example.com',
    googleAnalyticsId: 'TEST',
  },
  app: {
    baseURL: '/',
  },
});

export const useHead = vi.fn();

export const useColorMode = (): { value: string; preference: string } => ({
  value: 'light',
  preference: 'light',
});

export const defineNuxtPlugin = vi.fn();
