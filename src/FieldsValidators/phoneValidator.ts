export const phoneValidator = (phone: string) => {
  const phoneRegExp = /^(\+1|\+)?([\d]{10,11}$)/;

  let formattedPhone = '';
  let errorMessage = '';
  let errorLevel = null;
  let isValid = false;

  if (phone === null || phone === '') {
    return {
      errorLevel: 'global',
      phone,
      errorMessage,
      isValid,
    };
  }

  isValid = phoneRegExp.test(phone);

  if (isValid) {
    switch (phone.length) {
      case 10:
        formattedPhone = `+1${phone}`;
        break;
      case 11:
        formattedPhone = `+${phone}`;
        break;
      default:
        formattedPhone = phone;
        break;
    }
  } else {
    formattedPhone = phone;
    errorMessage = 'Phone format is not valid';
    errorLevel = 'local';
  }

  return {
    value: formattedPhone,
    errorMessage,
    isValid,
    errorLevel,
  };
};
