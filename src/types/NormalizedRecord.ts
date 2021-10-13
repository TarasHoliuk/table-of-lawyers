export interface NormalizedRecord {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  age: number;
  experience: number;
  yearlyIncome: number;
  hasChildren: boolean | string;
  licenseStates: string;
  expirationDate: string;
  licenseNumber: string;
  duplicateWith: number | null;
}
