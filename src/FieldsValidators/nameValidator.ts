export const nameValidator = (name: string) => {
  let errorMessage = '';
  let isValid = false;
  let errorLevel = null;

  if (name === null || name === '') {
    return {
      errorLevel: 'global',
      name,
      isValid,
      errorMessage,
    };
  }

  isValid = name.includes(' ');
  errorMessage = isValid
    ? ''
    : 'Full name should include at least two words';

  errorLevel = isValid
    ? null
    : 'local';

  return {
    value: name,
    errorMessage,
    isValid,
    errorLevel,
  };
};
