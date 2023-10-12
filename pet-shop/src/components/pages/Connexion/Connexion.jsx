import React from "react";
import Header from "../../organisms/Header/Header";
import Inscription from "../../organisms/InscriptionForm/InscriptionForm";
import ConnexionForm from "../../organisms/ConnexionForm/ConnexionForm";

const Connexion = () => {
  return (
    <div>
      <Header />
      <div className="flex relative m-40">
        <Inscription className=" mx-auto my-auto md:mx-4 md:my-0 " />
        <div className="m-10 border"></div>
        <ConnexionForm className=" mx-auto my-auto md:mx-4 md:my-0 " />
      </div>
    </div>
  );
};

export default Connexion;
