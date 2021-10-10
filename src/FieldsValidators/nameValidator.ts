export const nameValidator = (name: string) => {
  let nameError = '';
  const trimmedName = name.trim();
  const valid = trimmedName.includes(' ');

  nameError = valid
    ? ''
    : 'Full name should include at least two words';

  return {
    value: trimmedName,
    nameError,
    valid,
  };
};
