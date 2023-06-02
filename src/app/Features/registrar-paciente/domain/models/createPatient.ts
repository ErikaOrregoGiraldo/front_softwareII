import { Address } from './address';
import { HealthPersonnel } from './healthPersonnel';
import { MedicalData } from './medicalData';
import { Relative } from './relative';

export interface Patient {
  name: string;
  documentType: string;
  id: string;
  birthdate: Date;
  age: Number;
  email: string;
  phone: string;
  address: Address;
  medicalData: MedicalData;
  healthPersonnel: HealthPersonnel;
  relative: Relative;
}
