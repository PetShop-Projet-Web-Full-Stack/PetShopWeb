import React from "react";
import { useLocation } from "react-router-dom";
import AnimalerieAnimalsDetailsComponent from "../../organisms/AnimalerieAnimalsDetails/AnimalerieAnimalsDetailsComponent";
import AnimalerieDetailsComponent from "../../organisms/AnimalerieDetails/AnimalerieDetailsComponent";
const AnimalerieAnimals = () => {
  const { state } = useLocation();

  return (
    <div className="flex">
      <AnimalerieDetailsComponent animalerie={state.animalerie} />
      <AnimalerieAnimalsDetailsComponent animals={state.animalerie?.animals} />
    </div>
  );
};

export default AnimalerieAnimals;
