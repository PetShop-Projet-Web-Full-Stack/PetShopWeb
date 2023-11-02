import React from "react";
import Header from "../../organisms/Header/Header";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import AnimalsFilter from "../../organisms/AnimalsFilter/AnimalsFilter";
import Footer from "../../organisms/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllAnimals } from "../../../store/index";

const Animals = () => {
  const dispatch = useDispatch();
  const animalCards = useSelector((state) => {
    return state.animals.animals;
  });

  useEffect(() => {
    dispatch(getAllAnimals());
  }, [dispatch]);

  return (
    <div className="bg-slate-50 h-screen">
      <Header />
      <div className="flex bg-slate-50">
        <AnimalsFilter />
        <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start">
          {animalCards.map((card, index) => {
            return (
              <CardComponent
                key={index}
                title={card.name}
                description={card.races.name}
                btnClazz={"bg-gray-900"}
                btnContent="Voir plus"
                srcImg={card.imgSrc}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Animals;
