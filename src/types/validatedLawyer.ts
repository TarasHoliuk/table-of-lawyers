export interface ValidatedLawyer {
  id: number;
  fullName: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  phone: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  email: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  age: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | string};
  experience: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | string};
  yearlyIncome: {value: number, isValid: boolean, errorMessage: string, errorLevel: null | string};
  hasChildren: {value: boolean | string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  licenseStates: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  expirationDate: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  licenseNumber: {value: string, isValid: boolean, errorMessage: string, errorLevel: null | string};
  duplicateWith: number | null;
}
