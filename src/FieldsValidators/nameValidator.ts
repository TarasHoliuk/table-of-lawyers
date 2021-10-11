export const nameValidator = (name: string) => {
  let errorMessage = '';
  const trimmedName = name.trim();
  const isValid = trimmedName.includes(' ');

  errorMessage = isValid
    ? ''
    : 'Full name should include at least two words';

  return {
    value: trimmedName,
    errorMessage,
    isValid,
  };
};
