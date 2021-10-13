export const yearlyIncomeValidator = (yearlyIncome: number) => {
  let errorMessage = '';

  const isPositive = yearlyIncome > 0;
  errorMessage = isPositive
    ? ''
    : 'Yearly income should be equal or more zero';

  const isLessThanMillion = yearlyIncome <= 1000000;
  errorMessage = isLessThanMillion
    ? ''
    : 'Yearly income should be equal or less than one million';

  const value = +yearlyIncome.toFixed(2);

  const isValid = isPositive && isLessThanMillion;
  const errorLevel = isValid
    ? null
    : 'local';

  return {
    errorMessage,
    value,
    isValid,
    errorLevel,
  };
};
