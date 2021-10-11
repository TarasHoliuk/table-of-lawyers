export const expirationDateValidator = (date: string) => {
  const firstFormatRegExp = /(^(((\d\d)(([02468][048])|([13579][26]))-02-29)|(((\d\d)(\d\d)))-((((0\d)|(1[0-2]))-((0\d)|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30))))))/;
  const secondFormatRegExp = /(^((((0\d)|(1[0-2]))\/((0\d)|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))\/(((\d\d)(([02468][048])|([13579][26]))-02-29)|(((\d\d)(\d\d))))/;

  const trimmedDate = date.trim();
  let errorMessage = '';

  const isCorrectFormat
    = firstFormatRegExp.test(trimmedDate)
    || secondFormatRegExp.test(trimmedDate);

  errorMessage += isCorrectFormat
    ? ''
    : 'Date format is not valid ';

  const currentDate = new Date().toDateString();

  const isLicenseValid = Date.parse(currentDate) < Date.parse(trimmedDate);
  errorMessage += isLicenseValid
    ? ''
    : 'Expiration date is not valid';

  const isValid = isCorrectFormat && isLicenseValid;

  return {
    value: trimmedDate,
    errorMessage,
    isValid,
  };
};
