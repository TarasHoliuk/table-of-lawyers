export const phoneValidator = (phone: string) => {
  const phoneRegExp = /^(\+1|\+)?([\d]{10,11}$)/;
  const trimmedPhone = phone.trim();
  const isValid = phoneRegExp.test(trimmedPhone);
  let formattedPhone = '';
  let errorMessage = '';

  if (isValid) {
    switch (trimmedPhone.length) {
      case 10:
        formattedPhone = `+1${trimmedPhone}`;
        break;
      case 11:
        formattedPhone = `+${trimmedPhone}`;
        break;
      default:
        formattedPhone = trimmedPhone;
        break;
    }
  } else {
    formattedPhone = trimmedPhone;
    errorMessage = 'Invalid phone format';
  }

  return {
    value: formattedPhone,
    errorMessage,
    isValid,
  };
};
