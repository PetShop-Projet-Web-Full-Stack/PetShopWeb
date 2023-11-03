import React from "react";
import Header from "../../organisms/Header/Header";
import InscriptionForm from "../../organisms/InscriptionForm/InscriptionForm";
import Footer from "../../organisms/Footer/Footer";

const Inscription = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <InscriptionForm />
      </div>
      <Footer />
    </div>
  );
};

export default Inscription;
