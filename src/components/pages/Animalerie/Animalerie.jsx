import React from "react";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAnimalerie } from "../../../store/animalerie";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalerieFilter from "../../organisms/AnimalerieFilter/AnimalerieFilter";
import { useNavigate } from "react-router-dom";

const Animalerie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const animalerieCard = useSelector((state) => {
    return state.animalerie.animalerie;
  });

  useEffect(() => {
    dispatch(getAllAnimalerie());
  }, [dispatch]);

  const navigateToRecap = (card) => {
    navigate("/animalerie/animals", {
      state: {
        animalerie: card,
      },
    });
  };

  return (
    <div className="bg-slate-50 h-screen">
      <Header />
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
      <Footer />
    </div>
  );
};

export default Animalerie;
