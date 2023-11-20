import React from "react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HomeDiscoverComponent = () => {
  const navigate = useNavigate();

  const goToAnimalerie = () => {
    navigate("/animaleries");
  };

  return (
    <div className="flex flex-col justify-center items-center py-5">
      <div className="text-5xl m-5">Découvrez nos partenaire animalier</div>
      <ButtonComponent
        clazz="m-5 py-10 px-20 text-2xl"
        onClick={goToAnimalerie}
      >
        Parcourir les animaleries
      </ButtonComponent>
    </div>
  );
};

export default HomeDiscoverComponent;
