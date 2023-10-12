import Button from "../../atoms/Button/Button";
import Style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.headerTitle}>
        <Button>Title</Button>
      </div>
      <div className={Style.headerBtn}>
        <Link className={Style.headerLink} to="/">
          <Button>Accueil</Button>
        </Link>

        <Link className={Style.headerLink} to="/animals">
          <Button>Animaux</Button>
        </Link>

        <Link className={Style.headerLink} to="/animaleries">
          <Button> Animaleries</Button>
        </Link>

        <Link className={Style.headerLink} to="/connexion">
          <Button> Connexion</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
