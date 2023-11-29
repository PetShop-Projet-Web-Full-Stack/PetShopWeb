import CheckboxComponent from "../../atoms/CheckboxComponent/CheckboxComponent";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../store/questionnaire";
import RecapComponent from "../RecapComponent/RecapComponent";

const QuestionnaireParticule = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const dispatch = useDispatch();
  const questions = useSelector((state) => {
    return state?.question?.questions;
  });
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [possibilityResponse, setPossibilityResponse] = useState([]);
  const [isQuestionnaireComplete, setIsQuestionnaireComplete] = useState(false);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  useEffect(() => {
    if (isQuestionnaireComplete) {
      const userResponsesJson = JSON.stringify(userResponses);
      navigate("/score", { state: { userResponsesJson } });
    }
  }, [currentQuestionIndex, userResponses, navigate, isQuestionnaireComplete]);

  useEffect(() => {
    if (questions && questions.length > currentQuestionIndex) {
      setPossibilityResponse(
        questions[currentQuestionIndex].responses.split("/")
      );
    }
  }, [currentQuestionIndex, questions]);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, [currentQuestionIndex]);

  const handleAnswer = () => {
    setAnimate(false);
    setTimeout(() => {
      setResponse();
      if (currentQuestionIndex < questions.length - 2) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setPossibilityResponse(
          questions[currentQuestionIndex].responses.split("/")
        );
      } else {
        setIsQuestionnaireComplete(true);
      }
    }, 300);
  };

  const setResponse = () => {
    const responseLabel = possibilityResponse.find(
      (_, index) =>
        `${currentQuestionIndex}-option-${index}` === selectedResponse
    );
    let answerObject = {
      id_question: currentQuestionIndex + 1,
      answer: responseLabel,
    }

    setUserResponses((prevResponses) => [
      ...prevResponses,
      answerObject
    ]);
  };

  const handleCheckboxChange = (uniqueId) => {
    setSelectedResponse(uniqueId);
  };

  return (
    <div className="flex items-center w-full min-h-screen">
      <div className="flex justify-start">
        <RecapComponent
          userResponses={userResponses}
          questions={questions.map((q) => q.content)}
        />
      </div>
      <div className="flex flex-grow justify-center">
        <div className="justify-center w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md">
          <div
            className={`flex flex-col gap-3 transform transition duration-300 ease-in-out ${
              animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="flex items-center">
              <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">
                {questions[currentQuestionIndex]?.content}
              </h2>
            </div>
            {possibilityResponse?.map((possibility, index) => {
              const uniqueId = `${currentQuestionIndex}-option-${index}`;
              return (
                <div key={index}>
                  <CheckboxComponent
                    name={possibility}
                    index={uniqueId}
                    checked={selectedResponse === uniqueId}
                    onChange={() => handleCheckboxChange(uniqueId)}
                  />
                </div>
              );
            })}
            <div></div>
            <template />
            <button
              onClick={handleAnswer}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Répondre
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionnaireParticule;
