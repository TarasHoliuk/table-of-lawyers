export const emailValidator = (email: string) => {
  let isValid = false;
  let errorMessage = '';
  let errorLevel = null;

  if (email === null || email === '') {
    return {
      errorLevel: 'global',
      value: email,
      errorMessage,
      isValid,
    };
  }

  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  isValid = emailRegExp.test(email);
  errorMessage = isValid
    ? ''
    : 'Email is not valid';

  errorLevel = isValid
    ? null
    : 'local';

  return {
    value: email,
    errorMessage,
    isValid,
    errorLevel,
  };
};
