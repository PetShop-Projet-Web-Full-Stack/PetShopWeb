import Style from "./Button.module.css";

const Button = (props) => {
  return <div className={Style.button}>{props.children}</div>;
};

export default Button;
