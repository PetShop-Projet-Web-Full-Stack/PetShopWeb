import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllAnimals, getAnimalsByAnimalerieId } from "../../../store/animal";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalsFilter from "../../organisms/AnimalsFilter/AnimalsFilter";

const Animals = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const animalCards = useSelector((state) => {
    return state.animals.animals;
  });

  useEffect(() => {
    if (!location.state) {
      dispatch(getAllAnimals());
    } else {
      dispatch(getAnimalsByAnimalerieId({ id: location.state.animalerie.id }));
    }
  }, [dispatch, location.state]);

  const goToAnimalDetails = (animal) => {
    navigate(`/animal-details/${animal.id}`, { state: { animal } });
  };

  return (
    <div className="flex bg-slate-50">
      <AnimalsFilter />
      <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start">
        {animalCards.map((animal, index) => {
          return (
            <CardComponent
              key={index}
              title={animal.name}
              description={animal.race?.name}
              btnClazz={"bg-gray-900"}
              btnContent="Voir plus"
              srcImg={animal.imgSrc}
              onButtonClick={() => {
                goToAnimalDetails(animal);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Animals;
