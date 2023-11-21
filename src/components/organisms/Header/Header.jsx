import { useSelector } from "react-redux";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import ButtonHeader from "../../atoms/ButtonHeader/ButtonHeader";
import {DocumentDuplicateIcon, ArrowLeftOnRectangleIcon, PencilIcon} from "@heroicons/react/24/solid";
import DropdownMenu from "../../atoms/DropDown/DropDown";

const Header = () => {
  const user = useSelector((state) => {
    return state.user.user;
  });
  const menuItems = [
    {
      icon: <ArrowLeftOnRectangleIcon className="mr-2 h-5 w-5" aria-hidden="true" />,
      name: 'Logout',
      path: '/logout',
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

  return (
    <div
      className={
        "flex justify-between items-center bg-gray-900 text-white h-16 px-10"
      }
    >
      <div className={"flex-1 text-left"}>
        <ButtonComponent clazz="text-white text-2xl font-semibold cursor-pointer whitespace-nowrap border-white">
          Title
        </ButtonComponent>
      </div>
      <div className={"flex flex-1 justify-end gap-6"}>
        {headerBtn.map((btn, index) => {
          return (
            btn.content === user?.name
              ?
              <>
                <DropdownMenu
                  menuItems={menuItems}
                  popupPosition="bottom"
                  user={user}
                  signInAllow={true}
                />
              </>
              :
              <>
                <ButtonHeader key={index} link={btn.link}>
                  {btn.content}
                </ButtonHeader>
              </>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
