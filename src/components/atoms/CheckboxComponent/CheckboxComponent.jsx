import React from "react";
const CheckboxComponent = ({ name, index, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={index}
        name={index}
        value={index}
        checked={checked}
        onChange={onChange}
        className="flex 2xl:h-4 2xl:w-4 xl:h-4 xl:w-4 lg:h-3 lg:w-3 h-2 w-2 text-gray-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label className="flex ml-2 text-md lg:text-lg xl:text-xl 2xl:text-2xl" htmlFor={index}>{name}</label>
    </div>
  );
};

export default CheckboxComponent;
