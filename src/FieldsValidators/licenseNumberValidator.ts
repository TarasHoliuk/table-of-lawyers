export const licenseNumberValidator = (licenseNumber: string) => {
  const licenseNumberRegExp = /^(([a-zA-Z]|[\d]){6})$/;

  let errorMessage = '';

  const isValid = licenseNumberRegExp.test(licenseNumber);
  errorMessage = isValid
    ? ''
    : 'License number is not valid';

  const errorLevel = isValid
    ? null
    : 'local';

  return {
    value: licenseNumber,
    errorMessage,
    isValid,
    errorLevel,
  };
};
