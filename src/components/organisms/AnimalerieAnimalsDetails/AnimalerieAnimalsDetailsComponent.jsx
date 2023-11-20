import React from "react";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalsFilter from "../AnimalsFilter/AnimalsFilter";

const AnimalerieAnimalsDetailsComponent = (props) => {
  const { animals } = props;

  return (
    <div className="flex bg-slate-100 gap-5 p-5 w-3/5 xl:w-2/3">
      {animals ? (
        <div>
          <AnimalsFilter />
          <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start">
            {animals.map((card, index) => {
              return (
                <CardComponent
                  key={index}
                  title={card.name}
                  description={card.race?.name}
                  btnClazz={"bg-gray-900"}
                  btnContent="Voir plus"
                  srcImg={card.imgSrc}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center">
          <h1 className="text-3xl font-bold uppercase">
            Pas d'animaux disponible dans cette animalerie
          </h1>
        </div>
      )}
    </div>
  );
};

export default AnimalerieAnimalsDetailsComponent;
