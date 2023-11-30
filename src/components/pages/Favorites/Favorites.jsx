import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import { getAllFavorites } from "../../../store/favorites";

const Favorites = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteCard = useSelector((state) => {
    const favorites = state.favorite.favorites;
    return favorites.slice(0, -1);
  });

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);

  const navigateToRecap = (card) => {
    navigate(`/animal-details/${card.id}`, {
      state: {
        animal: card.animal,
      },
    });
  };

  return (
    <div className="flex">
      <div className="flex flex-wrap gap-12 pt-4 justify-center w-full">
        {favoriteCard.length === 0 ? (
          <div className="text-4xl">Vous n'avez aucun animal en favoris</div>
        ) : (
          favoriteCard.map((card, index) => (
            <CardComponent
              key={index}
              title={card?.animal?.name}
              description={`${card?.animal?.pet_shop?.address} ${card?.animal?.pet_shop?.city} `}
              btnClazz={"bg-gray-900"}
              btnContent="Voir plus"
              srcImg={card?.animal?.media?.content}
              onButtonClick={() => {
                navigateToRecap(card);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
