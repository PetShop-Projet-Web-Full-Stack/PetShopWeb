import React from "react";
import { useLocation } from "react-router-dom";
import AnimalDetailsComponent from "../../organisms/AnimalDetails/AnimalDetailsComponent";

const AnimalDetails = () => {
  const { state } = useLocation();

  return <AnimalDetailsComponent animal={state.animal} />;
};

export default AnimalDetails;
