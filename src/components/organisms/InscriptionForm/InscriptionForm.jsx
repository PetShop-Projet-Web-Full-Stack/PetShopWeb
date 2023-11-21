import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doInscription } from "../../../store/user";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ErrorModal from "../../atoms/ModalError/ModalError";
import SuccessModal from "../../atoms/SuccessModal/SuccessModal";
import {
  handleInputChange,
  isFormValid,
  isLengthCorrectForPassword,
} from "../../toolkit/form.service";

const InscriptionForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const userStatus = useSelector((state) => {
    return state.user.status;
  });

  const [formState, setFormState] = useState({
    nom: { value: "", valid: false },
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
    {
      value: formState.confirmation.value,
      type: "password",
      name: "confirmation",
      placeholder: "Confirmation du mot de passe",
    },
  ];

  const formValid = () => {
    return (
      isFormValid(formState) &&
      checkPasswrod() &&
      isLengthCorrectForPassword(
        formState.password.value,
        formState.confirmation.value
      )
    );
  };

  const checkPasswrod = () => {
    return formState.password.value === formState.confirmation.value;
  };

  const inscriptionInputChange = (event) => {
    handleInputChange(event, setFormState, formState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid()) {
      const name = formState.nom.value;
      const email = formState.email.value;
      const password = formState.password.value;
      const confirmation = formState.confirmation.value;

      const response = await dispatch(
        doInscription({ name, email, password, confirmation })
      );
      if (response.payload.success) {
        setShowSuccessModal(true);
      } else {
        setShowErrorModal(true);
      }
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  const navigateOnClick = () => {
    navigate("/connexion");
  };

  const onCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const onCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/connexion", {
      state: {
        showAlert: true,
        messageAlert: "Votre compte à été crée",
      },
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-64 w-full md:w-1/2 p-4 pr-4 border border-gray-300 rounded-lg">
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
        <div className="text-center mb-4 flex justify-center items-center gap-5">
          <ButtonComponent
            onClick={navigateOnClick}
            clazz={`w-20 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600`}
          >
            Retour
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            onClick={handleSubmit}
            disabled={!formValid()}
            clazz={`w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 ${
              !formValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Inscription
          </ButtonComponent>
        </div>
      </div>
      <ErrorModal
        isOpen={showErrorModal}
        closeModal={onCloseErrorModal}
        errorMessage="Erreur lors de l'inscription"
        errorTitle="Erreur"
      />
      <SuccessModal
        isOpen={showSuccessModal}
        closeModal={onCloseSuccessModal}
        successMessage="Vous êtes désormais inscrit !"
        successTitle="Succès !"
      />
    </div>
  );
};

export default InscriptionForm;
