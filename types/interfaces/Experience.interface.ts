import { ECompany } from '../enums/Company.enum';
import { EContractType } from '../enums/ContractType.enum';
import { EPosition } from '../enums/Position.enum';

export interface Experience{
  company: {
    name: `${ECompany}`;
    description: string;
  };
  position: `${EPosition}`;
  contractType: `${EContractType}`;
  startedAt: string;
  endedAt: string;
}
