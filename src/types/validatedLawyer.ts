export interface ValidatedLawyer {
  'Full Name': {value: string, valid: boolean};
  Phone: {value: string, valid: boolean};
  Email: {value: string, valid: boolean};
  Age: {value: number, valid: boolean};
  Experience: {value: number, valid: boolean};
  'Yearly Income': {value: number, valid: boolean};
  'Has children': {value: boolean | string, valid: boolean};
  'License states': {value: string, valid: boolean};
  'Expiration date': {value: string, valid: boolean};
  'License number': {value: string, valid: boolean};
  errors: {
    phoneError: string;
    nameError: string;
    emailError: string;
  };
}
