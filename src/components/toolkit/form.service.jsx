export const handleInputChange = (event, setFormState, formState) => {
  const { name, value } = event.target;

  const isFieldValid = value.trim() !== "" || false;

  setFormState({
    ...formState,
    [name]: { value, valid: isFieldValid },
  });
};

export const isFormValid = (formState) => {
  return Object.values(formState).every((field) => field.valid === true);
};

export const resetFormState = (formState) => {
  Object.values(formState).map((field) => {
    return (field.value = "");
  });
};
