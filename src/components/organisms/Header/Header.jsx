import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import ButtonHeader from "../../atoms/ButtonHeader/ButtonHeader";
import { ArrowLeftOnRectangleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import DropdownMenu from "../../atoms/DropDown/DropDown";
import { doLogoutUser } from "../../../store/user";
import { useNavigate } from "react-router-dom";
import {StarIcon} from "@heroicons/react/24/outline";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user.user;
  });
  const menuItems = [
      {
          icon: <StarIcon className="mr-2 h-5 w-5" aria-hidden="true"/>,
          name: 'Favorites',
          path: '/favorites',
      },
      {
          icon: <QuestionMarkCircleIcon className="mr-2 h-5 w-5 text-gray-700" aria-hidden="true"/>,
          name: 'Quizz',
          path: '/questionnaire',
      },
      {
      icon: (
        <ArrowLeftOnRectangleIcon className="mr-2 h-5 w-5" aria-hidden="true" />
      ),
      name: "Logout",
    },
  ];
  const headerBtn = [
    {
      content: "Accueil",
      link: "/",
    },
    {
      content: "Animaux",
      link: "/animals",
    },
    {
      content: "Animalerie",
      link: "/animaleries",
    },
    {
      content: user && user.name ? user.name : "Connexion",
      link: user && user.name ? "" : "/connexion",
    },
  ];

  const onClickLogout = async ({ name }) => {
    if (name === "Logout") {
      dispatch(doLogoutUser());
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 200);
    }
  };

  return (
    <div
      className={
        "flex justify-between items-center bg-gray-900 text-white h-16 px-10  z-50"
      }
    >
      <div className={"flex-1 text-left"}>
        <ButtonComponent clazz="text-white text-2xl font-semibold cursor-pointer whitespace-nowrap border-white">
          PetShop
        </ButtonComponent>
      </div>
      <div className={"flex flex-1 justify-end gap-6 items-center"}>
        {headerBtn.map((btn, index) => {
          return btn.content === user?.name ? (
            <DropdownMenu
              key={index}
              menuItems={menuItems}
              popupPosition="bottom"
              user={user}
              signInAllow={true}
              clickItem={onClickLogout}
            />
          ) : (
            <ButtonHeader key={index} link={btn.link}>
              {btn.content}
            </ButtonHeader>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
