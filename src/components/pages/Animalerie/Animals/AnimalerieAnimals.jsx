import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../organisms/Footer/Footer";
import Header from "../../../organisms/Header/Header";
import AnimalerieAnimalsDetailsComponent from "../../../organisms/AnimalerieAnimalsDetails/AnimalerieAnimalsDetailsComponent";
import AnimalerieDetailsComponent from "../../../organisms/AnimalerieDetails/AnimalerieDetailsComponent";
const AnimalerieAnimaux = () => {
  const { state } = useLocation();

  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <div className="flex">
        <AnimalerieDetailsComponent animalerie={state.animalerie} />
        <AnimalerieAnimalsDetailsComponent
          animals={state.animalerie?.animals}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AnimalerieAnimaux;
