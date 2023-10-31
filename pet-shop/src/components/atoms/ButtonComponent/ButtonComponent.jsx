import { Button } from "@material-tailwind/react";

const ButtonComponent = (props) => {
  const { clazz, disabled, type, onClick } = props;
  return (
    <Button
      className={clazz}
      disabled={disabled}
      type={type}
      onClick={onClick ? onClick : () => {}}
    >
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
