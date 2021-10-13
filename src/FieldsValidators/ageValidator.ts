export const ageValidator = (age: number) => {
  let errorMessage = '';

  const isInteger = Number.isInteger(age);
  errorMessage += isInteger
    ? ''
    : 'Age should be integer ';

  const isPositive = age >= 0;
  errorMessage += isPositive
    ? ''
    : 'Age should be equal or more zero';

  const isAdult = age >= 21;
  errorMessage += isAdult
    ? ''
    : 'Lawyer should be adult';

  const isValid = isInteger && isAdult;
  const errorLevel = isValid
    ? null
    : 'local';

  return {
    value: age,
    errorMessage,
    isValid,
    errorLevel,
  };
};
