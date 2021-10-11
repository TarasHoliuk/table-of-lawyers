export const emailValidator = (email: string) => {
  let errorMessage = '';
  const trimmedEmail = email.trim();
  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const isValid = emailRegExp.test(trimmedEmail);

  errorMessage = isValid
    ? ''
    : 'Email is not valid';

  return {
    value: trimmedEmail,
    errorMessage,
    isValid,
  };
};
