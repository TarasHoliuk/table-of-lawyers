export const hasChildrenValidator = (hasChildren: boolean | string) => {
  let isValid = true;
  let value;
  let errorMessage = '';
  let errorLevel = null;

  if (typeof hasChildren === 'string') {
    switch (hasChildren) {
      case '':
        isValid = true;
        value = false;
        break;
      case 'TRUE':
        value = true;
        isValid = true;
        break;
      case 'FALSE':
        isValid = true;
        value = false;
        break;
      default:
        isValid = false;
        value = hasChildren;
        errorMessage = 'Value should be TRUE/FALSE or empty';
    }
  } else {
    value = hasChildren;
    errorLevel = 'local';
  }

  return {
    value,
    errorMessage,
    isValid,
    errorLevel,
  };
};
