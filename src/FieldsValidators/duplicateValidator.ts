import { ValidatedLawyer } from '../types/ValidatedLawyer';

export const duplicateValidator = (validatedData: ValidatedLawyer[]) => {
  let foundedDuplicate: null | ValidatedLawyer | undefined = null;
  return validatedData.map(lawyer => {
    foundedDuplicate = validatedData.find(duplicate => {
      return (duplicate.phone === lawyer.phone || duplicate.email === lawyer.email)
      && duplicate.id !== lawyer.id;
    });

    if (foundedDuplicate) {
      lawyer.duplicatedWith = foundedDuplicate.id;
    }

    return lawyer;
  });
};
