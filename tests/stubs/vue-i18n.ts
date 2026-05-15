export const useI18n = (): { t: (key: string) => string } => ({
  t: (key: string): string => key,
});
