import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnimalsModel } from "../../../store/questionnaire";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import { addAnimalFavorite, deleteAnimalFavorite } from "../../../store/animal";
const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnimalsModel(JSON.parse(location?.state?.userResponsesJson)));
  }, [dispatch, location?.state?.userResponsesJson]);

  const animalsData = useSelector((state) => {
    const animals = state.question.animalsModel.animals;
    const total = state.question.animalsModel.total;
    return {
      animals: animals,
      total: total,
    };
  });

  const animals = animalsData.animals;
  const total = animalsData.total;

  const [valuesProgress, setValuesProgress] = useState(0);
  useEffect(() => {
    const animalsLenght = animals?.length;
    setValuesProgress(total === undefined ? 0 : (animalsLenght / total) * 100);
  }, [animals, total]);

  const goToAnimalDetails = (animal) => {
    navigate(`/animal-details/${animal.id}`, { state: { animal } });
  };

  return (
    <div className="flex flex-col gap-5 mx-auto p-4 m-6">
      <p className=" flex flex-grow justify-center font-bold text-8xl">
        {valuesProgress || 0} %
      </p>
      <ProgressBar value={valuesProgress} />

      <div className="flex flex-wrap gap-5 justify-center">
        {animals?.length === 0 ? (
          <p className="text-4xl">Aucun animal ne vous correspond</p>
        ) : (
          animals?.map((animal, index) => (
            <CardComponent
              key={index}
              title={animal.name}
              description={animal.race?.name}
              btnClazz={"bg-gray-900"}
              btnContent="Voir plus"
              birthday={animal.date_of_birth}
              srcImg={animal?.media?.content}
              onButtonClick={() => {
                goToAnimalDetails(animal);
              }}
              isAnimal={true}
              favoriteAnimal={animal.is_favorite}
              favOnClick={() => {
                if (animal.is_favorite) {
                  dispatch(deleteAnimalFavorite({ id: animal.id }));
                } else {
                  dispatch(addAnimalFavorite({ id: animal.id }));
                }
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ScorePage;
