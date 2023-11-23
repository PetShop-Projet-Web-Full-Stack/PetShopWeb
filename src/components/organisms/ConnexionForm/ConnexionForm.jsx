import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doConnexion } from "../../../store/user";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ErrorModal from "../../atoms/ModalError/ModalError";
import { handleInputChange, isFormValid } from "../../toolkit/form.service";

const ConnexionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showErrorModal, setShowErrorModal] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid()) {
      const email = formState.email.value;
      const password = formState.password.value;

      const response = await dispatch(doConnexion({ email, password }));

      if (response.payload) {
        navigate("/");
      } else {
        setShowErrorModal(true);
      }
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  const onCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-64 w-full md:w-1/2 p-4 border border-gray-300 rounded-lg">
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
        <div className="text-right pb-5">
          <Link to="/forgot-password">
            <ButtonComponent clazz={"bg-blue-500"}>
              Mot de passe oublié ?
            </ButtonComponent>
          </Link>
        </div>
        <div className="text-center flex justify-center items-center gap-5">
          <ButtonComponent
            clazz={`w-auto bg-blue-500 py-2 rounded-md hover:bg-blue-600 p-2 `}
          >
            <Link to={"/inscription"}>
              Pas encore de compte ? Inscrivez-vous !
            </Link>
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            onClick={handleSubmit}
            disabled={!formValid()}
            clazz={`w-40 bg-blue-500 py-2 rounded-md hover:bg-blue-600 ${
              !formValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Connexion
          </ButtonComponent>
        </div>
      </div>
      <ErrorModal
        isOpen={showErrorModal}
        closeModal={onCloseErrorModal}
        errorMessage="Une erreur interne est survenue"
        errorTitle="Erreur !"
      />
    </div>
  );
};

export default ConnexionForm;
