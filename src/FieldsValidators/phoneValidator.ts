export const phoneValidator = (phone: string) => {
  const phoneRegExp = /^(\+|\+1)?[\d]{10,11}$/;
  const trimmedPhone = phone.trim();
  const valid = phoneRegExp.test(trimmedPhone);
  let formattedPhone = '';
  let phoneError = '';

  if (valid) {
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
    phoneError = 'Invalid phone format';
  }

  return {
    valid,
    value: formattedPhone,
    phoneError,
  };
};
