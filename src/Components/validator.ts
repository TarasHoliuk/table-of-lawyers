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
import { NormalizedRecord } from '../types/NormalizedRecord';
import { ValidatedLawyer } from '../types/ValidatedLawyer';

const validators = {
  fullName: nameValidator,
  phone: phoneValidator,
  email: emailValidator,
  age: ageValidator,
  experience: experienceValidator,
  yearlyIncome: yearlyIncomeValidator,
  hasChildren: hasChildrenValidator,
  licenseStates: licenseStatesValidator,
  expirationDate: expirationDateValidator,
  licenseNumber: licenseNumberValidator,
};

export const INVALID_DATA = 'Invalid lawyers data';

export const validator = (data: NormalizedRecord[]) => {
  let errorsCounter = 0;

  let validatedData = data.map(lawyer => {
    const validatedLawyer: ValidatedLawyer = {} as ValidatedLawyer;

    for (const key in lawyer) {
      if (key !== 'id' || key !== 'duplicateWith') {
        validatedLawyer[key] = validators[key](lawyer[key]);
      }

      if (validatedLawyer[key].errorLevel === 'global') {
        throw new Error(INVALID_DATA);
      } else if (validatedLawyer[key].errorLevel === 'local') {
        errorsCounter += 1;
      }
    }

    return validatedLawyer;
  });

  validatedData = duplicateValidator(validatedData);

  return { validatedData, errorsCounter };
};
