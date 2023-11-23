import React from "react";
import DetailCardComponent from "../../atoms/DetailCard/DetailCardComponent";
import { calculateAge } from "../../toolkit/age-calculator.service";

const AnimalDetailCardComponent = (props) => {
  const { animal } = props;

  const age = calculateAge(animal.date_of_birth);
  return (
    <div className="text-center border rounded-2xl bg-white p-6 shadow-md">
      <div className="text-4xl pb-12">Description</div>
      <div className="font-bold grid grid-cols-2 gap-4">
        <DetailCardComponent value={animal.name}>Nom :</DetailCardComponent>
        <DetailCardComponent value={animal.race?.species?.name}>
          Espèce :
        </DetailCardComponent>
        <DetailCardComponent value={age}>Age :</DetailCardComponent>
        <DetailCardComponent value={animal.gender}>Sexe :</DetailCardComponent>
        <DetailCardComponent value={animal.date_of_birth}>
          Date de naissance :
        </DetailCardComponent>
        <DetailCardComponent value={animal.race?.name}>
          Race :
        </DetailCardComponent>
      </div>
    </div>
  );
};

export default AnimalDetailCardComponent;
