import React from "react";
import ComboBoxComponent from "../../atoms/ComboBoxComponent/ComboBoxComponent";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { useState } from "react";
import { handleInputChange } from "../../toolkit/form.service";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterAnimalerie, getAllAnimalerie } from "../../../store/animalerie";

const AnimalerieFilter = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => {
    const cities = state.animalerie?.animaleries
      ?.map((animalerie) => {
        return {
          name: animalerie.city,
          value: `${animalerie.id}`,
        };
      })
      .filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.name === item.name)
      );
    const updatedCities = cities.slice(0, -1);
    return updatedCities;
  });

  const [cityCombo, setCityCombo] = useState(null);

  const [formState, setFormState] = useState({
    city: { value: "", valid: false },
    cp: { value: "", valid: false },
  });

  useEffect(() => {
    dispatch(getAllAnimalerie());
  }, [dispatch]);

  const onChangeField = (event) => {
    handleInputChange(event, setFormState, formState);
  };

  const onCityChange = (itemValue) => {
    setCityCombo(itemValue);
    onChangeField({ target: { name: "city", value: itemValue } });
  };

  const handleSubmit = () => {
    const city = cities.find((c) => c.value === cityCombo);
    const zipcode = formState.cp.value;
    dispatch(filterAnimalerie({ city: city?.name, zipcode }));
  };

  return (
    <div className="w-60 bg-slate-100 flex flex-col gap-5 p-5 ">
      <ComboBoxComponent items={cities} modifySelectedValue={onCityChange}>
        Ville
      </ComboBoxComponent>

      <div className="flex flex-col">
        <h1>Code postal</h1>
        <InputFormComponent
          value={formState.cp.value}
          name="cp"
          placeholder="Ex : 12345"
          onChange={onChangeField}
        />
      </div>

      <ButtonComponent clazz="w-full mt-5 p-2" onClick={handleSubmit}>
        Filtrer
      </ButtonComponent>
    </div>
  );
};

export default AnimalerieFilter;
