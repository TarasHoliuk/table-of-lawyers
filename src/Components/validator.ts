import { ageValidator } from '../FieldsValidators/ageValidator';
import { duplicateValidator } from '../FieldsValidators/duplicateValidator';
import { emailValidator } from '../FieldsValidators/emailValidator';
import { experienceValidator } from '../FieldsValidators/experienceValidator';
import { expirationDateValidator } from '../FieldsValidators/expirationDateValidator';
import { hasChildrenValidator } from '../FieldsValidators/hasChildrenValidator';
import { licenseNumberValidator } from '../FieldsValidators/licenseNumberValidator';
import { licenseStatesValidator } from '../FieldsValidators/licenseStatesValidator';
import { nameValidator } from '../FieldsValidators/nameValidator';
import { phoneValidator } from '../FieldsValidators/phoneValidator';
import { yearlyIncomeValidator } from '../FieldsValidators/yearlyIncomeValidator';
import { LawyerData } from '../types/lawyerData';
import { ValidatedLawyer } from '../types/validatedLawyer';

export const validator = (
  data: LawyerData[],
  setGlobalError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let validatedData = data.map(lawyer => {
    const validatedLawyer: ValidatedLawyer = {} as ValidatedLawyer;

    let idCounter = 1;
    validatedLawyer.ID = idCounter;

    validatedLawyer['Duplicated with'] = null;

    for (const key in lawyer) {
      switch (key) {
        case 'Full Name':
          validatedLawyer[key] = nameValidator(lawyer[key], setGlobalError);
          break;
        case 'Phone':
          validatedLawyer[key] = phoneValidator(lawyer[key], setGlobalError);
          break;
        case 'Email':
          validatedLawyer[key] = emailValidator(lawyer[key], setGlobalError);
          break;
        case 'Age':
          validatedLawyer[key] = ageValidator(lawyer[key]);
          break;
        case 'Experience':
          validatedLawyer[key] = experienceValidator(lawyer[key], lawyer.Age);
          break;
        case 'Yearly Income':
          validatedLawyer[key] = yearlyIncomeValidator(lawyer[key]);
          break;
        case 'Has children':
          validatedLawyer[key] = hasChildrenValidator(lawyer[key]);
          break;
        case 'License states':
          validatedLawyer[key] = licenseStatesValidator(lawyer[key]);
          break;
        case 'Expiration date':
          validatedLawyer[key] = expirationDateValidator(lawyer[key]);
          break;
        case 'License number':
          validatedLawyer[key] = licenseNumberValidator(lawyer[key]);
          break;
        default:
          break;
      }
    }

    idCounter += 1;

    return validatedLawyer;
  });

  validatedData = duplicateValidator(validatedData);

  return validatedData;
};
