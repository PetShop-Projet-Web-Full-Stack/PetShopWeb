import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import AnimalDetailsComponent from "../../organisms/AnimalDetails/AnimalDetailsComponent";

const AnimalDetails = () => {
  const { state } = useLocation();

  return (
    <div>
      <Header />
      <AnimalDetailsComponent animal={state.animal} />
      <Footer />
    </div>
  );
};

export default AnimalDetails;
