export const hasChildrenValidator = (hasChildren: boolean | string) => {
  let isValid = true;
  let value = '';
  let errorMessage = '';

  if (typeof hasChildren === 'string') {
    const trimmedHasChildren = hasChildren.trim();

    switch (trimmedHasChildren) {
      case '':
        isValid = true;
        value = 'FALSE';
        break;
      case 'TRUE':
      case 'FALSE':
        isValid = true;
        value = trimmedHasChildren;
        break;
      default:
        isValid = false;
        value = trimmedHasChildren;
        errorMessage = 'Value should be TRUE/FALSE or empty';
    }
  } else {
    value = hasChildren
      ? 'TRUE'
      : 'FALSE';
  }

  return {
    value,
    errorMessage,
    isValid,
  };
};
