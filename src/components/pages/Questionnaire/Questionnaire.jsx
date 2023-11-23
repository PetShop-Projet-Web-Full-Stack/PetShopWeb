import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../store/questionnaire";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => {
    return state?.question?.questions.split("\n");
  });

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {questions.map((question, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: question }} />
        ))}
      </ul>
    </div>
  );
};

export default Questionnaire;
