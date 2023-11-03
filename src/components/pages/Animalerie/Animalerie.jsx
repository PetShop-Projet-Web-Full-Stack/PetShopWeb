import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const Animalerie = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">Animalerie</div>
      <Footer />
    </div>
  );
};

export default Animalerie;
