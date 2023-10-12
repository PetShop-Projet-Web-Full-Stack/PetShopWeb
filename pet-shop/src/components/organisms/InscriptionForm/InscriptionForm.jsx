import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { handleInputChange, isFormValid } from "../../toolkit/form.service";

const Inscription = () => {
  const [formState, setFormState] = useState({
    nom: { value: "", valid: false },
    prenom: { value: "", valid: false },
    telephone: { value: "", valid: false },
    email: { value: "", valid: false },
    password: { value: "", valid: false },
    confirmation: { value: "", valid: false },
  });

  const form = [
    {
      value: formState.nom.value,
      type: "text",
      name: "nom",
      placeholder: "Nom",
    },
    {
      value: formState.prenom.value,

      type: "text",
      name: "prenom",
      placeholder: "Prénom",
    },
    {
      value: formState.email.value,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      value: formState.telephone.value,
      type: "tel",
      name: "telephone",
      placeholder: "Téléphone",
    },
    {
      value: formState.password.value,
      type: "password",
      name: "password",
      placeholder: "Mot de passe",
    },
    {
      value: formState.confirmation.value,
      type: "password",
      name: "confirmation",
      placeholder: "Confirmation du mot de passe",
    },
  ];

  const formValid = () => {
    return isFormValid(formState) && checkPasswrod();
  };

  const checkPasswrod = () => {
    return formState.password.value === formState.confirmation.value;
  };

  const inscriptionInputChange = (event) => {
    handleInputChange(event, setFormState, formState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid()) {
      console.log(formState);
      const nom = formState.nom.value;
      const prenom = formState.prenom.value;
      const email = formState.email.value;
      const tel = formState.telephone.value;
      const pwd = formState.password.value;
      const confirmation = formState.confirmation.value;
      console.log("Formulaire valide, soumettre les données...");
      console.log(nom, prenom, tel, email, pwd, confirmation);
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 p-4 pr-4 border border-gray-300 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      <div className="flex flex-wrap -mx-3 mb-4">
        {form.map((field, index) => {
          return (
            <div key={index} className="w-full md:w-1/2 px-3 mb-4">
              <InputFormComponent
                value={field.value}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={true}
                onChange={inscriptionInputChange}
              />
            </div>
          );
        })}
      </div>
      <div className="text-center mb-4">
        <ButtonComponent
          type="submit"
          disabled={!formValid()}
          clazz={`w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 ${
            !formValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Inscription
        </ButtonComponent>
      </div>
    </form>
  );
};

export default Inscription;
