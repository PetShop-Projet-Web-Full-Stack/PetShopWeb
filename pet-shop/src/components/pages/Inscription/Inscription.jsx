import React from "react";
import Header from "../../organisms/Header/Header";
import InscriptionForm from "../../organisms/InscriptionForm/InscriptionForm";

const Inscription = () => {
  return (
    <div>
      <Header />
      <InscriptionForm className=" mx-auto my-auto md:mx-4 md:my-0 " />
    </div>
  );
};

export default Inscription;
