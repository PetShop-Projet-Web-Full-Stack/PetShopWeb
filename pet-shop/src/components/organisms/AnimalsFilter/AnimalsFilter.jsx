import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { handleInputChange } from "../../toolkit/form.service";

const AnimalsFilter = () => {
  const racesSelect = ["Labrador", "Caniche"];
  const speciesSelect = ["Chat", "Chien"];
  const [formState, setFormState] = useState({
    races: { value: racesSelect[0], valid: false },
    species: { value: speciesSelect[0], valid: false },
    minAge: { value: "", valid: false },
    maxAge: { value: "", valid: false },
  });

  const handleSubmit = () => {
    console.log("on submit form", formState);
  };

  const onChangeField = (event) => {
    console.log(formState);
    handleInputChange(event, setFormState, formState);
  };

  return (
    <form className="w-60 bg-slate-100 flex-col p-5" onSubmit={handleSubmit}>
      {/* <SelectComponent
        selectedOption={formState.races.value}
        listItem={racesSelect}
        onChange={onChangeField}
      >
        Races
      </SelectComponent>
      <SelectComponent
        selectedOption={formState.species.value}
        listItem={speciesSelect}
        onChange={onChangeField}
      >
        Espèces
      </SelectComponent> */}
      <div className="gap-2 flex pt-5">
        <InputFormComponent
          value={formState.minAge.value}
          name="min"
          placeholder="Min : 0"
        />
        <InputFormComponent
          value={formState.maxAge.value}
          name="max"
          placeholder="Max : 0"
        />
      </div>
      <ButtonComponent clazz="w-full mt-5 p-2" type="submit">
        Filtrer
      </ButtonComponent>
    </form>
  );
};

export default AnimalsFilter;
