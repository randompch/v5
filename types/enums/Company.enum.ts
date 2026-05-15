export const ECompany = {
  AdnRealty: 'ADN Realty',
  CityDrop: 'City-Drop',
  LaReleve: 'La Relève',
  Liberkeys: 'Liberkeys',
  LVDF: 'LVDF',
  Selency: 'Selency',
  StudioBOP: 'Studio BOP',
} as const;

export type ECompany = (typeof ECompany)[keyof typeof ECompany];
