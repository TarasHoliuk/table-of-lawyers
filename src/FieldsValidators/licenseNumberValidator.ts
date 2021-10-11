export const licenseNumberValidator = (licenseNumber: string) => {
  const trimmedLicenseNumber = licenseNumber.trim();
  const licenseNumberRegExp = /^(([a-zA-Z]|[\d]){6})$/;

  let errorMessage = '';

  const isValid = licenseNumberRegExp.test(trimmedLicenseNumber);
  errorMessage = isValid
    ? ''
    : 'License number is not valid';

  return {
    value: trimmedLicenseNumber,
    errorMessage,
    isValid,
  };
};
