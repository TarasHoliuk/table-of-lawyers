export const experienceValidator = (experience: number, age: number) => {
  let errorMessage = '';

  const isPositive = experience >= 0;
  errorMessage += isPositive
    ? ''
    : 'Experience should be equal or more zero ';

  const isLessThanAge = experience < age;
  errorMessage += isLessThanAge
    ? ''
    : 'Experience should be less than age';

  const isValid = isPositive && isLessThanAge;
  const errorLevel = isValid
    ? null
    : 'local';

  return {
    value: experience,
    errorMessage,
    isValid,
    errorLevel,
  };
};
