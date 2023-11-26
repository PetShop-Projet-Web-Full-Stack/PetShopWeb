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
          src={
            animal.medias_id
              ? animal.medias_id
              : "https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
          }
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
