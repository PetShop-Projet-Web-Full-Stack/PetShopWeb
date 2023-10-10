import Button from "../../atoms/Button/Button";
import Style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.headerTitle}>
        <Button text="Title"></Button>
      </div>
      <div className={Style.headerBtn}>
        <Link className={Style.headerLink} to="/">
          <Button text="Accueil"></Button>
        </Link>

        <Link className={Style.headerLink} to="/animaux">
          <Button text="Animaux"></Button>
        </Link>

        <Link className={Style.headerLink} to="/animaleries">
          <Button text="Animaleries"></Button>
        </Link>

        <Link className={Style.headerLink} to="/connexion">
          <Button text="Connexion"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
