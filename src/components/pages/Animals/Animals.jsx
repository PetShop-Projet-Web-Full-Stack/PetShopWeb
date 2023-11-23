import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAnimals } from "../../../store/animal";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalsFilter from "../../organisms/AnimalsFilter/AnimalsFilter";

const Animals = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const animalCards = useSelector((state) => {
    return state.animals.animals;
  });

  useEffect(() => {
    dispatch(getAllAnimals());
  }, [dispatch]);

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
              birthday={animal.date_of_birth}
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
