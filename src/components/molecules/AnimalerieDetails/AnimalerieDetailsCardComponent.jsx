import React, { useEffect } from "react";
import DetailCardComponent from "../../atoms/DetailCard/DetailCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalerieById } from "../../../store/animalerie";

const AnimalerieDetailsCardComponent = (props) => {
  const { idAnimal } = props;

  const dispatch = useDispatch();
  const animalerie = useSelector((state) => {
    return state.animalerie.animalerie;
  });

  console.log(animalerie);
  useEffect(() => {
    dispatch(getAnimalerieById({ id: idAnimal }));
  }, [dispatch, idAnimal]);
  return (
    <div className="text-center border rounded-2xl">
      <div className="text-4xl pb-12">{animalerie.name}</div>
      <div className="font-bold grid grid-cols-2 gap-4">
        <DetailCardComponent value={animalerie.address}>
          Adresse :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.city}>
          Ville :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.phone}>
          N° de téléphone :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.zipcode}>
          Code postal :
        </DetailCardComponent>
      </div>
    </div>
  );
};

export default AnimalerieDetailsCardComponent;
