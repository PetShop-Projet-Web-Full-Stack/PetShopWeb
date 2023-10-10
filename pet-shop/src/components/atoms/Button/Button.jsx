import Style from "./Button.module.css";

const Button = ({ text }, props) => {
  return <div className={Style.button}>{text}</div>;
};

export default Button;
