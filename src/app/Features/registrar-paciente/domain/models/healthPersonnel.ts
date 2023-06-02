import { Speciality } from "../enums/speciality";

export interface HealthPersonnel {
  name: string;
  id: string;
  birthdate: Date;
  mail: string;
  speciality: Speciality
}
