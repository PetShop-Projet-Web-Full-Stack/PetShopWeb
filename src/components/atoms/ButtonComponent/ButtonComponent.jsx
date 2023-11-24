import { Button } from "@material-tailwind/react";

const ButtonComponent = (props) => {
  const { clazz, disabled, type, onClick } = props;
  return (
    <Button
      className={`p-2 hover:bg-gray-400 hover:text-white transition ${clazz} `}
      disabled={disabled}
      type={type | "button"}
      onClick={onClick ? onClick : () => {}}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
