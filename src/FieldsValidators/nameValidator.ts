export const nameValidator = (
  name: string,
  setGlobalError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let errorMessage = '';
  let isValid = false;
  let trimmedName = '';

  if (name === null) {
    setGlobalError(true);
  } else {
    trimmedName = name.trim();

    if (trimmedName === '') {
      setGlobalError(true);
    }
  }

  isValid = trimmedName.includes(' ');
  errorMessage = isValid
    ? ''
    : 'Full name should include at least two words';

  return {
    value: trimmedName,
    errorMessage,
    isValid,
  };
};
