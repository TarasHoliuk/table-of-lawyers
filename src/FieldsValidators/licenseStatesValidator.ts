import { states } from '../states';

export const licenseStatesValidator = (statesString: string) => {
  const enteredStates = statesString.trim().split(' | ');
  let errorMessage = '';
  let isValid = true;

  const formattedStates = enteredStates.map(state => {
    const lowState = state.toLowerCase();
    const foundedState = states.find(basicState => (
      basicState.name.toLowerCase() === lowState
      || basicState.abbreviation.toLowerCase() === lowState
    ));

    if (!foundedState) {
      errorMessage = 'One of the states is not valid';
      isValid = false;
    }

    return foundedState
      ? foundedState.abbreviation
      : state;
  });

  return {
    value: formattedStates.join(' | '),
    errorMessage,
    isValid,
  };
};
