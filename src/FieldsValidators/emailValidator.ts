export const emailValidator = (
  email: string,
  setGlobalError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  let isValid = false;
  let errorMessage = '';
  let trimmedEmail = '';
  // const globalErrorResult = {
  //   value: email,
  //   errorMessage,
  //   isValid,
  //   globalError: true,
  // };

  if (email === null) {
    setGlobalError(true);
  } else {
    trimmedEmail = email.trim();

    if (trimmedEmail === '') {
      setGlobalError(true);
    }
  }

  const emailRegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  isValid = emailRegExp.test(trimmedEmail);
  errorMessage = isValid
    ? ''
    : 'Email is not valid';

  return {
    value: trimmedEmail,
    errorMessage,
    isValid,
  };
};
