import { ageValidator } from '../FieldsValidators/ageValidator';
import { emailValidator } from '../FieldsValidators/emailValidator';
import { experienceValidator } from '../FieldsValidators/experienceValidator';
import { hasChildrenValidator } from '../FieldsValidators/hasChildrenValidator';
import { nameValidator } from '../FieldsValidators/nameValidator';
import { phoneValidator } from '../FieldsValidators/phoneValidator';
import { yearlyIncomeValidator } from '../FieldsValidators/yearlyIncomeValidator';
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
        case 'Age':
          validatedLawyer[key] = ageValidator(lawyer[key]);
          break;
        case 'Experience':
          validatedLawyer[key] = experienceValidator(lawyer[key], validatedLawyer.Age.value);
          break;
        case 'Yearly Income':
          validatedLawyer[key] = yearlyIncomeValidator(lawyer[key]);
          break;
        case 'Has children':
          validatedLawyer[key] = hasChildrenValidator(lawyer[key]);
          break;
        // case 'Expiration date':
        //   validatedLawyer[key]
        default:
          break;
      }
    }

    return validatedLawyer;
  });

  return result;
};
