import React from "react";
import { Input } from "@material-tailwind/react";

const InputFormComponent = (props) => {
  const { name, required, onChange, value, ...otherProps } = props;

  const checkInputError = () => {
    return required && (value === "" || value === null);
  };

  return (
    <div className="flex">
      <Input
        {...otherProps}
        className={`h-10 w-full text-base border-1 rounded-lg text-18 border-solid border-gray-400  focus:border ${
          checkInputError() ? "border-red-500" : ""
        } `}
        name={name}
        onChange={onChange}
      />
      {required && <span className="font-bold text-red-500 pl-1">*</span>}
    </div>
  );
};

export default InputFormComponent;
