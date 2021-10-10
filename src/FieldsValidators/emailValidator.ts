export const emailValidator = (email: string) => {
  let emailError = '';
  const trimmedEmail = email.trim();
  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const valid = emailRegExp.test(trimmedEmail);

  emailError = valid
    ? ''
    : 'Email is not valid';

  return {
    emailError,
    value: trimmedEmail,
    valid,
  };
};
