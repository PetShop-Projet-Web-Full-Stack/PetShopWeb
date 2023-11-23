import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnimalsModel } from "../../../store/questionnaire";
import ProgressBar from "../../atoms/ProgressBar/ProgressBar";
import CardComponent from "../../molecules/CardComponent/CardComponent";
const ScorePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userResponses, setUserResponses] = useState();

  useEffect(() => {
    setUserResponses(JSON.parse(location?.state?.userResponsesJson));
    dispatch(getAnimalsModel(userResponses));
  }, [dispatch]);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedResponses = userResponses?.filter(
      (response) => response !== null
    ).length;
    const totalQuestions = userResponses?.length;
    setProgress((completedResponses / totalQuestions) * 100);
  }, [userResponses]);

  const animalsData = useSelector((state) => {
    const animals = state.question.animalsModel.animals;
    const total = state.question.animalsModel.total;
    return {
      animals: animals,
      total: total,
    };
  });
  const [valuesProgress, setValuesProgress] = useState(animalsData.total);

  const navigateToAnimalPage = (animal) => {
    // TODO : naviguer vers la page de l'animal
    navigate(`/animal-details/${animal.id}`, { state: { animal } });
  };

  return (
    <div className="flex flex-col gap-5 mx-auto p-4 m-6">
      <ProgressBar value={valuesProgress} />

      <div className="flex flex-wrap gap-5 justify-center">
        {animalsData.map((animal) => (
          <CardComponent
            key={animal.id}
            srcImg={animal.img}
            title={animal.name}
            description={animal.description}
            btnClazz={""}
            btnContent={"Voir Plus"}
            onButtonClick={() => {
              navigateToAnimalPage(animal);
            }}
            birthday={animal.birthday}
          />
        ))}
      </div>
    </div>
  );
};

export default ScorePage;
