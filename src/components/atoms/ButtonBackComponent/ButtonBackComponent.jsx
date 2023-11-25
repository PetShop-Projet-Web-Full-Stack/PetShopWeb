import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonBackComponent = (props) => {
  const navigate = useNavigate();
  const { clazz } = props;
  return (
    <ButtonComponent
      clazz={clazz}
      onClick={() => {
        navigate(-1);
      }}
    >
      Retour
    </ButtonComponent>
  );
};

export default ButtonBackComponent;
