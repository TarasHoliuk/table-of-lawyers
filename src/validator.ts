import { ageValidator } from './FieldsValidators/ageValidator';
import { duplicateValidator } from './FieldsValidators/duplicateValidator';
import { emailValidator } from './FieldsValidators/emailValidator';
import { experienceValidator } from './FieldsValidators/experienceValidator';
import { expirationDateValidator } from './FieldsValidators/expirationDateValidator';
import { hasChildrenValidator } from './FieldsValidators/hasChildrenValidator';
import { licenseNumberValidator } from './FieldsValidators/licenseNumberValidator';
import { licenseStatesValidator } from './FieldsValidators/licenseStatesValidator';
import { nameValidator } from './FieldsValidators/nameValidator';
import { phoneValidator } from './FieldsValidators/phoneValidator';
import { yearlyIncomeValidator } from './FieldsValidators/yearlyIncomeValidator';
import { NormalizedRecord } from './types/NormalizedRecord';
import { ValidatedLawyer } from './types/ValidatedLawyer';

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

  let validatedData = data.map(record => {
    const validatedLawyer: ValidatedLawyer = {} as ValidatedLawyer;

    for (const key in record) {
      switch (key) {
        case 'fullName':
          validatedLawyer.fullName = validators.fullName(record.fullName);

          if (validatedLawyer.fullName.errorLevel === 'global') {
            throw new Error(INVALID_DATA);
          } else if (validatedLawyer.fullName.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'phone':
          validatedLawyer.phone = validators.phone(record.phone);

          if (validatedLawyer.phone.errorLevel === 'global') {
            throw new Error(INVALID_DATA);
          } else if (validatedLawyer.phone.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'email':
          validatedLawyer.email = validators.email(record.email);

          if (validatedLawyer.email.errorLevel === 'global') {
            throw new Error(INVALID_DATA);
          } else if (validatedLawyer.email.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'age':
          validatedLawyer.age = validators.age(record.age);

          if (validatedLawyer.age.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'experience':
          validatedLawyer.experience = validators.experience(record.experience, record.age);

          if (validatedLawyer.experience.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'yearlyIncome':
          validatedLawyer.yearlyIncome = validators.yearlyIncome(record.yearlyIncome);

          if (validatedLawyer.yearlyIncome.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'hasChildren':
          validatedLawyer.hasChildren = validators.hasChildren(record.hasChildren);

          if (validatedLawyer.hasChildren.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'licenseStates':
          validatedLawyer.licenseStates = validators.licenseStates(record.licenseStates);

          if (validatedLawyer.licenseStates.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'expirationDate':
          validatedLawyer.expirationDate = validators.expirationDate(record.expirationDate);

          if (validatedLawyer.expirationDate.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'licenseNumber':
          validatedLawyer.licenseNumber = validators.licenseNumber(record.licenseNumber);

          if (validatedLawyer.licenseNumber.errorLevel === 'local') {
            errorsCounter += 1;
          }
          break;
        case 'id':
          validatedLawyer.id = record.id;
          break;
        case 'duplicateWith':
          validatedLawyer.duplicateWith = record.duplicateWith;
          break;
        default:
          break;
      }
    }

    return validatedLawyer;
  });

  validatedData = duplicateValidator(validatedData);

  return { validatedData, errorsCounter };
};
