import React from "react";
import Header from "../../organisms/Header/Header";
import ConnexionForm from "../../organisms/ConnexionForm/ConnexionForm";
import Footer from "../../organisms/Footer/Footer";

const Connexion = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <ConnexionForm />
      <Footer />
    </div>
  );
};

export default Connexion;
