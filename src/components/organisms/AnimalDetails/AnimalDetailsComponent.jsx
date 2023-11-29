import React, { useEffect, useState } from "react";
import AnimalerieDetailsCardComponent from "../../molecules/AnimalerieDetails/AnimalerieDetailsCardComponent";
import AnimalDetailCardComponent from "../../molecules/AnimalDetailsCard/AnimalDetailCardComponent";
import ButtonFavorite from "../../atoms/ButtonFavorite/ButtonFavorite";
import { addAnimalFavorite, deleteAnimalFavorite } from "../../../store/animal";
import { useDispatch, useSelector } from "react-redux";
import ButtonBackComponent from "../../atoms/ButtonBackComponent/ButtonBackComponent";

const AnimalDetailsComponent = (props) => {
  const { animal } = props;
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user.user;
  });

  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    setIsFavorite(animal.is_favorite);
  }, [animal]);

  const favOnClick = () => {
    if (isFavorite) {
      dispatch(deleteAnimalFavorite({ id: animal.id }));
    } else {
      dispatch(addAnimalFavorite({ id: animal.id }));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-slate-50 flex">
      <div className="flex-1 p-5">
        <img
          src={`data:image/webp;base64,${animal.media}`}
          alt="Not found"
          className="rounded-tl-3xl rounded-3xl object-cover h-[50rem] w-full"
        />
      </div>
      <div className="flex-1">
        <div className="p-5">
          <AnimalerieDetailsCardComponent idAnimal={animal.id} />
        </div>

        <div className="p-5">
          <AnimalDetailCardComponent animal={animal} />
        </div>
        <div className="flex justify-center mx-auto gap-4">
          <div>
            {user ? (
              <ButtonFavorite favOnClick={favOnClick} favorite={isFavorite}>
                Favoris
              </ButtonFavorite>
            ) : (
              ""
            )}
          </div>
          <ButtonBackComponent />
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsComponent;
