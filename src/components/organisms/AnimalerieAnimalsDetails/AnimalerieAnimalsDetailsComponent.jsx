import React from "react";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalsFilter from "../AnimalsFilter/AnimalsFilter";
import { useNavigate } from "react-router-dom";
const AnimalerieAnimalsDetailsComponent = (props) => {
  const { animals } = props;
  const navigate = useNavigate();
  const onClickShowAnimals = (animal) => {
    navigate(`/animal-details/${animal.id}`, { state: { animal } });
  };

  return (
    <div className="flex bg-slate-100 gap-5 p-5 w-3/5 xl:w-2/3">
      {animals?.length > 0 ? (
        <div className="flex gap-5 w-full">
          <AnimalsFilter />
          <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start w-full">
            {animals.map((card, index) => {
              return (
                <CardComponent
                  key={index}
                  title={card.name}
                  srcImg={card.media?.content}
                  description={card.race?.name}
                  btnClazz={"bg-gray-900"}
                  btnContent="Voir plus"
                  birthday={card.date_of_birth}
                  onButtonClick={() => onClickShowAnimals(card)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-3xl text-center font-bold uppercase">
            Pas d'animaux disponible dans cette animalerie
          </h1>
        </div>
      )}
    </div>
  );
};

export default AnimalerieAnimalsDetailsComponent;
