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
          const nameValidationResult = nameValidator(lawyer[key]);

          validatedLawyer.errors.nameError = nameValidationResult.nameError;
          validatedLawyer[key].value = nameValidationResult.value;
          validatedLawyer[key].valid = nameValidationResult.valid;
          break;
        case 'Phone':
          const phoneValidationResult = phoneValidator(lawyer[key]);

          validatedLawyer.errors.phoneError = phoneValidationResult.phoneError;
          validatedLawyer[key].value = phoneValidationResult.value;
          validatedLawyer[key].valid = phoneValidationResult.valid;
          break;
        case 'Email':
          const emailValidationResult = emailValidator(lawyer[key]);

          validatedLawyer.errors.emailError = emailValidationResult.emailError;
          validatedLawyer[key].value = emailValidationResult.value;
          validatedLawyer[key].valid = emailValidationResult.valid;
          break;
        default:
          break;
      }
    }

    return validatedLawyer;
  });

  return result;
};
