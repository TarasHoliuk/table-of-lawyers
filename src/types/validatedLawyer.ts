export interface ValidatedLawyer {
  id: number;
  fullName: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  phone: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  email: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  age: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  experience: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  yearlyIncome: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  hasChildren: {value: boolean | string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  licenseStates: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  expirationDate: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  licenseNumber: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | 'local' | 'global'};
  duplicatedWith: number | null;
}
