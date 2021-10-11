export interface ValidatedLawyer {
  ID: number;
  'Full Name': {value: string, isValid: boolean, errorMessage: string};
  Phone: {value: string, isValid: boolean, errorMessage: string};
  Email: {value: string, isValid: boolean, errorMessage: string};
  Age: {value: number, isValid: boolean, errorMessage: string};
  Experience: {value: number, isValid: boolean, errorMessage: string};
  'Yearly Income': {value: number, isValid: boolean, errorMessage: string};
  'Has children': {value: boolean | string, isValid: boolean, errorMessage: string};
  'License states': {value: string, isValid: boolean, errorMessage: string};
  'Expiration date': {value: string, isValid: boolean, errorMessage: string};
  'License number': {value: string, isValid: boolean, errorMessage: string};
  'Duplicated with': number | null;
}
