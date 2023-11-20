import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAnimalerie } from "../../../store/animalerie";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalerieFilter from "../../organisms/AnimalerieFilter/AnimalerieFilter";

const Animalerie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const animalerieCard = useSelector((state) => {
    return state.animalerie.animaleries || [];
  });

  useEffect(() => {
    dispatch(getAllAnimalerie());
  }, [dispatch]);

  const navigateToRecap = (card) => {
    navigate(`/animalerie/${card.id}`, {
      state: {
        animalerie: card,
      },
    });
  };

  return (
    <div className="flex bg-slate-50">
      <AnimalerieFilter />
      <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start">
        {animalerieCard.map((card, index) => {
          return (
            <CardComponent
              key={index}
              title={card.name}
              description={`${card.address} ${card.city} `}
              btnClazz={"bg-gray-900"}
              btnContent="Voir plus"
              srcImg={card.imgSrc}
              onButtonClick={() => {
                navigateToRecap(card);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Animalerie;
