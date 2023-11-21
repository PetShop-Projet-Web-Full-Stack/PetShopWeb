export const isLengthCorrectForPassword = (password, confirmation) => {
  return password.length >= 8 && confirmation.length >= 8;
};

export const handleInputChange = (event, setFormState, formState) => {
  const { name, value } = event.target;

  const isFieldValid = value?.trim() !== "" || false;

  setFormState({
    ...formState,
    [name]: { value, valid: isFieldValid },
  });
};

export const isFormValid = (formState) => {
  return Object.values(formState).every((field) => field.valid === true);
};
