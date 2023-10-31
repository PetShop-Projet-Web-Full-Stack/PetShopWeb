import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

const ButtonHeader = (props) => {
  return (
    <Link className={"no-underline"} to={props.link}>
      <ButtonComponent clazz="text-white text-2xl font-semibold cursor-pointer whitespace-nowrap border-white">
        {props.children}
      </ButtonComponent>
    </Link>
  );
};

export default ButtonHeader;
