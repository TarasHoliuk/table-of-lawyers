import { ValidatedLawyer } from '../types/ValidatedLawyer';

export const duplicateValidator = (validatedData: ValidatedLawyer[]) => {
  let foundedDuplicate: null | ValidatedLawyer | undefined = null;
  return validatedData.map(lawyer => {
    foundedDuplicate = validatedData.find(duplicate => {
      return (duplicate.phone.value === lawyer.phone.value
        || duplicate.email.value.toLowerCase() === lawyer.email.value.toLowerCase())
      && duplicate.id !== lawyer.id;
    });

    if (foundedDuplicate) {
      lawyer.duplicatedWith = foundedDuplicate.id;
    }

    return lawyer;
  });
};
