import { Card, CardBody } from "@material-tailwind/react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { calculateAge } from "../../toolkit/age-calculator.service";
import ButtonFavorite from "../../atoms/ButtonFavorite/ButtonFavorite";
import { useSelector } from "react-redux";

const CardComponent = (props) => {
  const {
    srcImg,
    title,
    description,
    btnDisable,
    btnClazz,
    btnContent,
    onButtonClick,
    birthday,
    isAnimal = false,
    favoriteAnimal = false,
    favOnClick,
  } = props;

  const age = calculateAge(birthday);
  const user = useSelector((state) => {
    return state.user.user;
  });

  return (
    <Card className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 h-96 rounded-3xl bg-white transition-transform transform hover:scale-105">
      <div className="flex flex-col rounded-3xl">
        <img
          src={`data:image/webp;base64,${srcImg}`}
          alt="Not found"
          className="rounded-tl-3xl rounded-tr-3xl object-cover h-56 w-full"
        />
        <CardBody className="mb-3 px-4">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-col">
              <h1 className="font-semibold text-xl mb-2 mt-2 whitespace-normal">
                {title}
              </h1>
              <p className="text-gray-700 whitespace-normal">{description}</p>
            </div>
            <p className="text-gray-700 text-2xl font-semibold ">
              {age ? age : ""}
            </p>
          </div>
          <div className="flex gap-2 mt-3 justify-between">
            {isAnimal && user ? (
              <ButtonFavorite
                favorite={favoriteAnimal}
                favOnClick={favOnClick}
              />
            ) : (
              ""
            )}
            <ButtonComponent
              clazz={`${btnClazz} w-28 h-18`}
              disabled={btnDisable || false}
              onClick={onButtonClick}
            >
              {btnContent}
            </ButtonComponent>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default CardComponent;
