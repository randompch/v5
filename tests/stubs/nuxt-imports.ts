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

// Singleton state for color mode so tests can assert mutations done by the component
export const colorModeState = { value: 'light', preference: 'light' };
export const useColorMode = (): typeof colorModeState => colorModeState;
export const resetColorMode = (): void => {
  colorModeState.value = 'light';
  colorModeState.preference = 'light';
};

export const defineNuxtPlugin = vi.fn();
