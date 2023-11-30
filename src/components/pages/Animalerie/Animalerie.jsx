import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAllAnimalerie} from "../../../store/animalerie";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalerieFilter from "../../organisms/AnimalerieFilter/AnimalerieFilter";

const Animalerie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const animalerieCard = useSelector((state) => {
    const animaleries = state.animalerie.animaleries;
    return animaleries.slice(0, -1);
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
      <div className="flex flex-wrap gap-12 pt-4 justify-center">
        {animalerieCard.map((card, index) => (
          <CardComponent
            key={index}
            title={card.name}
            description={`${card.address} ${card.city} `}
            btnClazz={"bg-gray-900"}
            btnContent="Voir plus"
            srcImg={card?.media?.content}
            onButtonClick={() => {
              navigateToRecap(card);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Animalerie;
