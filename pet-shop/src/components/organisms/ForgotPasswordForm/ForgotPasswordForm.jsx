import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import {
  handleInputChange,
  isFormValid,
  resetFormState,
} from "../../toolkit/form.service";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: { value: "", valid: false },
  });

  const form = [
    {
      value: formState.email.value,
      type: "email",
      name: "email",
      placeholder: "Email",
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
      console.log("Formulaire valide, soumettre les données...");
      console.log(email);
      resetFormState(formState);
      navigate("/connexion", {
        state: {
          showAlert: true,
          messageAlert: "Un email vient d'être envoyé",
        },
      });
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  const navigateOnClick = () => {
    navigate("/connexion");
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="mt-64 w-full md:w-1/2 p-4 border border-gray-300 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Changer de mot de passe</h2>
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

        <div className="text-center flex justify-center items-center gap-5">
          <ButtonComponent
            onClick={navigateOnClick}
            clazz={`w-20 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600`}
          >
            Retour
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            disabled={!formValid()}
            clazz={`w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 ${
              !formValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Envoyer
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
