import React from "react";

const DetailCardComponent = (props) => {
  const { value } = props;
  return (
    <div className="p-5 text-xl">
      <span className="uppercase font-bold"> {props.children} </span>
      <span className="font-normal">{value}</span>
    </div>
  );
};

export default DetailCardComponent;
