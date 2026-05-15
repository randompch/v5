import type { ValueOf } from 'type-fest';

export const EPosition = {
  FrontEndDeveloper: 'Front-end developer',
  FrontEndEngineer: 'Front-end engineer',
  FullStackDeveloper: 'Full-stack developer',
  SoftwareEngineer: 'Software engineer',
} as const;

export type Position = ValueOf<typeof EPosition>;

export const ECompany = {
  AdnRealty: 'ADN Realty',
  CityDrop: 'City-Drop',
  LaReleve: 'La Relève',
  Liberkeys: 'Liberkeys',
  LVDF: 'LVDF',
  Selency: 'Selency',
  StudioBOP: 'Studio BOP',
} as const;

export type Company = ValueOf<typeof ECompany>;

export const EContractType = {
  Apprenticeship: 'Apprenticeship',
  Freelance: 'Freelance',
  FullTime: 'Full time',
  Internship: 'Internship',
  PartTime: 'Part time',
} as const;

export type ContractType = ValueOf<typeof EContractType>;

export const ESocialLink = {
  Dev: 'https://dev.to/randompch',
  Github: 'https://github.com/randompch',
  LinkedIn: 'https://www.linkedin.com/in/antoinepiche/',
  Medium: 'https://medium.com/@randompiche',
  StackOverflow: 'https://stackoverflow.com/users/7262921/randompch',
} as const;

export type SocialLink = ValueOf<typeof ESocialLink>;
