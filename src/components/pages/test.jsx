import ButtonComponent from "../atoms/ButtonComponent/ButtonComponent";
import ErrorModal from "../atoms/ModalError/ModalError";
import ModalWarning from "../atoms/ModalWarning/ModalWarning";
import SuccessModal from "../atoms/SuccessModal/SuccessModal";
import React, { useState } from 'react';
const Test = () => {
  const closeModalError = () => setIsModalErrorOpen(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);
  const closeModalWarning = () => setIsModalWarningOpen(false);
  const [isModalWarningOpen, setIsModalWarningOpen] = useState(false);
  const closeModalSuccess = () => setIsModalSuccessOpen(false);
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

const btnClazz = "bg-gray-900";

  return (
    <div className="flex-col justify-center flex items-center pt-4">
      <SuccessModal
        isOpen={isModalSuccessOpen}
        closeModal={closeModalSuccess}
        successMessage="Voici votre message de succès"
        successTitle="Voici votre titre de succès"
      />
      <ErrorModal
        isOpen={isModalErrorOpen}
        closeModal={closeModalError}
        errorMessage="Voici votre message d'erreur"
        errorTitle="Voici votre titre d'erreur"
      />
      <ModalWarning
        isOpen={isModalWarningOpen}
        closeModal={closeModalWarning}
        warningMessage="Voici votre message d'avertissement"
        warningTitle="Voici votre titre d'avertissement"
      />
      <div className="flex flex-col gap-5">
        <ButtonComponent

          clazz={`${btnClazz} w-28 h-10`}
          disabled={false}
          onClick={() => setIsModalErrorOpen(true)}
        >
          ErrorModal
        </ButtonComponent>
        <ButtonComponent

          clazz={`${btnClazz} w-28 h-10`}
          disabled={false}
          onClick={() => setIsModalWarningOpen(true)}
        >
          WarningModal
        </ButtonComponent>
        <ButtonComponent

          clazz={`${btnClazz} w-28 h-10`}
          disabled={false}
          onClick={() => setIsModalSuccessOpen(true)}
        >
          Success
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Test;