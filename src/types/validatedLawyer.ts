export interface ValidatedLawyer {
  'Full Name': {value: string, valid: boolean, errorMessage: string};
  Phone: {value: string, valid: boolean, errorMessage: string};
  Email: {value: string, valid: boolean, errorMessage: string};
  Age: {value: number, valid: boolean, errorMessage: string};
  Experience: {value: number, valid: boolean, errorMessage: string};
  'Yearly Income': {value: number, valid: boolean, errorMessage: string};
  'Has children': {value: boolean | string, valid: boolean, errorMessage: string};
  'License states': {value: string, valid: boolean, errorMessage: string};
  'Expiration date': {value: string, valid: boolean, errorMessage: string};
  'License number': {value: string, valid: boolean, errorMessage: string};
  errors: {
    phoneError: string;
    nameError: string;
    emailError: string;
  };
}
