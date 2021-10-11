export const phoneValidator = (
  phone: string,
  setGlobalError: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const phoneRegExp = /^(\+1|\+)?([\d]{10,11}$)/;

  let formattedPhone = '';
  let errorMessage = '';
  let trimmedPhone = '';

  if (phone === null) {
    setGlobalError(true);
  } else {
    trimmedPhone = phone.trim();

    if (trimmedPhone === '') {
      setGlobalError(true);
    }
  }

  const isValid = phoneRegExp.test(trimmedPhone);

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
    errorMessage = 'Phone format is not valid';
  }

  return {
    value: formattedPhone,
    errorMessage,
    isValid,
  };
};
