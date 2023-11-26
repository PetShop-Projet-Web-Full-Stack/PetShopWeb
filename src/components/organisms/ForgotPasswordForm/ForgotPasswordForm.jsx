import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doChangePassword } from "../../../store/user";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import SuccessModal from "../../atoms/SuccessModal/SuccessModal";
import { handleInputChange, isFormValid } from "../../toolkit/form.service";
import ButtonBackComponent from "../../atoms/ButtonBackComponent/ButtonBackComponent";

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid()) {
      const email = formState.email.value;
      await dispatch(doChangePassword({ email }));
      setShowSuccessModal(true);
    } else {
      alert("Le formulaire n'est pas rempli correctement");
    }
  };

  const onCloseSuccessModal = () => {
    navigate("/connexion", {
      state: {
        showAlert: true,
        messageAlert: "Un email vient d'être envoyé",
      },
    });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="mt-64 w-full md:w-1/2 p-4 border border-gray-300 rounded-lg">
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
          <ButtonBackComponent clazz="w-20 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600" />
          <ButtonComponent
            type="submit"
            onClick={handleSubmit}
            disabled={!formValid()}
            clazz={`w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 ${
              !formValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Envoyer
          </ButtonComponent>
        </div>
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        closeModal={onCloseSuccessModal}
        successMessage="Mail envoyé avec succès !"
        successTitle="Succès"
      />
    </div>
  );
};

export default ForgotPasswordForm;
