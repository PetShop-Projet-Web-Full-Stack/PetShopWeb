import { Button } from "@material-tailwind/react";

const ButtonComponent = (props) => {
  const { clazz, disabled, type } = props;
  return (
    <Button className={clazz} disabled={disabled} type={type}>
      {props.children}
    </Button>
  );
};

export default ButtonComponent;
