import { Button } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const ButtonFavorite = (props) => {
  const { favorite, favOnClick } = props;

  return (
    <Button
      className={`p-2 hover:bg-gray-400 hover:text-white transition max-w-xs`}
      onClick={favOnClick}
    >
      <StarIcon
        className={`w-5 h-5 ${favorite ? "text-amber-300" : "text-white"} ${
          props.children ? "inline" : ""
        }`}
      />
      {props.children ? (
        <p className="inline ml-2 mt-1.5">{props.children}</p>
      ) : (
        ""
      )}
    </Button>
  );
};

export default ButtonFavorite;
