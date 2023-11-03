import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import ButtonHeader from "../../atoms/ButtonHeader/ButtonHeader";

const Header = () => {
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
      content: "Connexion",
      link: "/connexion",
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
