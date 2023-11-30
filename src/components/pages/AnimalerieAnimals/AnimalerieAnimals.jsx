import React from "react";
import { useLocation } from "react-router-dom";
import AnimalerieAnimalsDetailsComponent from "../../organisms/AnimalerieAnimalsDetails/AnimalerieAnimalsDetailsComponent";
import AnimalerieDetailsComponent from "../../organisms/AnimalerieDetails/AnimalerieDetailsComponent";
import ButtonBackComponent from "../../atoms/ButtonBackComponent/ButtonBackComponent";
const AnimalerieAnimals = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col bg-slate-100 h-screen">
      <ButtonBackComponent clazz="self-end mt-2 mr-2" />
      <div className="flex flex-grow">
        <AnimalerieDetailsComponent animalerie={state.animalerie} />
        <AnimalerieAnimalsDetailsComponent
          animals={state.animalerie?.animals}
        />
      </div>
    </div>
  );
};

export default AnimalerieAnimals;
