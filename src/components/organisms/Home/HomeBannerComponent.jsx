import React from "react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

const HomeBannerComponent = () => {
  const navigate = useNavigate();

  const goToAnimals = () => {
    navigate("/animals");
  };

  return (
    <div className="relative w-full max-h-300px h-[50rem] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://media.istockphoto.com/id/168814214/fr/photo/magnifique-berger-australien-%C3%A0.jpg?s=612x612&w=0&k=20&c=Doe3MOA0XUO8ubJe5Ow4-xqE4Ble4YVgKWodE89yZY0="
        alt="Banner"
      />
      <div className="absolute top-80 right-44 p-4 ">
        <ButtonComponent clazz="py-10 px-20 text-2xl" onClick={goToAnimals}>
          Adopter un animal
        </ButtonComponent>
      </div>
    </div>
  );
};

export default HomeBannerComponent;
