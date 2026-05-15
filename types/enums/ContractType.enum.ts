export const EContractType = {
  Apprenticeship: 'Apprenticeship',
  Freelance: 'Freelance',
  FullTime: 'Full time',
  Internship: 'Internship',
  PartTime: 'Part time',
} as const;

export type EContractType = (typeof EContractType)[keyof typeof EContractType];
