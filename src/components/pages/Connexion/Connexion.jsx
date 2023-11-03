import React from "react";
import Header from "../../organisms/Header/Header";
import ConnexionForm from "../../organisms/ConnexionForm/ConnexionForm";
import Footer from "../../organisms/Footer/Footer";

const Connexion = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <ConnexionForm />
      </div>
      <Footer />
    </div>
  );
};

export default Connexion;
