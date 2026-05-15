export const EPosition = {
  FrontEndDeveloper: 'Front-end developer',
  FrontEndEngineer: 'Front-end engineer',
  FullStackDeveloper: 'Full-stack developer',
  SoftwareEngineer: 'Software engineer',
} as const;

export type EPosition = (typeof EPosition)[keyof typeof EPosition];
