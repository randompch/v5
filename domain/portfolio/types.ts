import type { Company, ContractType, Position } from './constants';

export interface Experience {
  company: {
    name: Company;
    description: string;
  };
  contractType: ContractType;
  endedAt: string;
  position: Position;
  startedAt: string;
  timeSpent: string;
}
