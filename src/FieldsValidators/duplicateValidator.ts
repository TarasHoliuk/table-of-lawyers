import { ValidatedLawyer } from '../types/validatedLawyer';

export const duplicateValidator = (validatedData: ValidatedLawyer[]) => {
  return validatedData.map(lawyer => {
    const foundedDuplicate = validatedData.find(duplicate => {
      return (duplicate.Phone === lawyer.Phone || duplicate.Email === lawyer.Email)
      && duplicate.ID !== lawyer.ID;
    });

    if (foundedDuplicate) {
      lawyer['Duplicated with'] = foundedDuplicate.ID;
    }

    return lawyer;
  });
};
