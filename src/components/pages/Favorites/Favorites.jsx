import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CardComponent from "../../molecules/CardComponent/CardComponent";
import {getAllFavorites} from "../../../store/favorites";

const Favorites = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const favoritesCard = useSelector((state) => {
        return state.favorite.favorites || [];
    });

    useEffect(() => {
        dispatch(getAllFavorites());
    }, [dispatch]);

    const navigateToRecap = (card) => {
        navigate(`/animal-details/${card.animal_id}`, {
            state: {
                animal: card.animal,
            },
        });
    };

    return (
        <div className="flex bg-slate-50 h-screen">
            <div className="flex flex-wrap gap-8 pt-4 pl-4 justify-start">
                {favoritesCard.slice(0, -1).map((card, index) => {
                    return (
                        <CardComponent
                            key={index}
                            title={card?.animal?.name}
                            description={`${card?.animal?.pet_shop?.address} ${card?.animal?.pet_shop?.city} `}
                            btnClazz={"bg-gray-900"}
                            btnContent="Voir plus"
                            srcImg={card.imgSrc}
                            onButtonClick={() => {
                                navigateToRecap(card);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;
