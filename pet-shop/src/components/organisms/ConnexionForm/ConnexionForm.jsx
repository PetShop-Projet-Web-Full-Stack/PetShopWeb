import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import {
  handleInputChange,
  isFormValid,
  resetFormState,
} from "../../toolkit/form.service";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";

const ConnexionForm = () => {
  const [formState, setFormState] = useState({
    email: { value: "", valid: false },
    password: { value: "", valid: false },
  });

  const form = [
    {
      value: formState.email.value,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      value: formState.password.value,
      type: "password",
      name: "password",
      placeholder: "Mot de passe",
    },
  ];

  const formValid = () => {
    return isFormValid(formState);
  };

  const inputConnexionChange = (event) => {
    handleInputChange(event, setFormState, formState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid()) {
      const email = formState.email.value;
      const password = formState.password.value;
      console.log("Formulaire valide, soumettre les données...");
      console.log(email, password);
      resetFormState(formState);
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg h-1/2 self-center "
    >
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      {form.map((field, index) => {
        return (
          <div className="mb-4" key={index}>
            <InputFormComponent
              value={field.value}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={true}
              onChange={inputConnexionChange}
            />
          </div>
        );
      })}
      <div className="text-center">
        <ButtonComponent
          type="submit"
          disabled={!formValid()}
          clazz={`w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 ${
            !formValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Connexion
        </ButtonComponent>
      </div>
    </form>
  );
};

export default ConnexionForm;
