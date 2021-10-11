import { emailValidator } from '../FieldsValidators/emailValidator';
import { nameValidator } from '../FieldsValidators/nameValidator';
import { phoneValidator } from '../FieldsValidators/phoneValidator';
import { LawyerData } from '../types/lawyerData';
import { ValidatedLawyer } from '../types/validatedLawyer';

export const validator = (data: LawyerData[]) => {
  const result = data.map(lawyer => {
    const validatedLawyer: ValidatedLawyer = {} as ValidatedLawyer;

    for (const key in lawyer) {
      switch (key) {
        case 'Full Name':
          validatedLawyer[key] = nameValidator(lawyer[key]);
          break;
        case 'Phone':
          validatedLawyer[key] = phoneValidator(lawyer[key]);
          break;
        case 'Email':
          validatedLawyer[key] = emailValidator(lawyer[key]);
          break;
        default:
          break;
      }
    }

    return validatedLawyer;
  });

  return result;
};
