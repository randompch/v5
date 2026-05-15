export const ESocialLink = {
  Dev: 'https://dev.to/randompch',
  Github: 'https://github.com/randompch',
  LinkedIn: 'https://www.linkedin.com/in/antoinepiche/',
  Medium: 'https://medium.com/@randompiche',
  StackOverflow: 'https://stackoverflow.com/users/7262921/randompch',
} as const;

export type ESocialLink = (typeof ESocialLink)[keyof typeof ESocialLink];
