import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { handleInputChange } from "../../toolkit/form.service";
import ComboBoxComponent from "../../atoms/ComboBoxComponent/ComboBoxComponent";

const AnimalsFilter = () => {
  const racesSelect = ["Labrador", "Caniche"];
  const speciesSelect = ["Chat", "Chien"];
  const [formState, setFormState] = useState({
    races: { value: racesSelect[0], valid: false },
    species: { value: speciesSelect[0], valid: false },
    minAge: { value: "", valid: false },
    maxAge: { value: "", valid: false },
  });

  const [raceCombo, setRaceCombo] = useState(null);
  const [speciesCombo, setSpeciesCombo] = useState(null);

  const handleSubmit = () => {
    console.log("on submit form", formState);
    const race = raceCombo;
    const species = speciesCombo;
    const minAge = formState.minAge.value;
    const maxAge = formState.maxAge.value;
  };

  const onChangeField = (event) => {
    handleInputChange(event, setFormState, formState);
  };

  const onRacesChange = (itemValue) => {
    setRaceCombo(itemValue);
    onChangeField({ target: { name: "races", value: itemValue } });
  };

  const onSpeciesChange = (itemValue) => {
    setSpeciesCombo(itemValue);
    onChangeField({ target: { name: "species", value: itemValue } });
  };

  const raceItems = [
    {
      name: "Caniche",
      value: "0",
    },
    {
      name: "Labrador",
      value: "1",
    },
  ];

  const speciesItems = [
    {
      name: "Chat",
      value: "0",
    },
    {
      name: "Chien",
      value: "1",
    },
  ];

  return (
    <div className="w-60 bg-slate-100 flex flex-col gap-5 p-5 ">
      <ComboBoxComponent items={raceItems} modifySelectedValue={onRacesChange}>
        Races
      </ComboBoxComponent>
      <ComboBoxComponent
        items={speciesItems}
        modifySelectedValue={onSpeciesChange}
      >
        Espèces
      </ComboBoxComponent>
      <div className="flex-col">
        <h1>Tranche d'âge</h1>
        <div className="gap-2 flex pt-5 z-auto">
          <InputFormComponent
            value={formState.minAge.value}
            name="minAge"
            placeholder="Min : 0"
            onChange={onChangeField}
          />
          <InputFormComponent
            value={formState.maxAge.value}
            name="maxAge"
            placeholder="Max : 0"
            onChange={onChangeField}
          />
        </div>
      </div>

      <ButtonComponent clazz="w-full mt-5 p-2" onClick={handleSubmit}>
        Filtrer
      </ButtonComponent>
    </div>
  );
};

export default AnimalsFilter;
