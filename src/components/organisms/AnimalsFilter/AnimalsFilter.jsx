import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { handleInputChange } from "../../toolkit/form.service";
import ComboBoxComponent from "../../atoms/ComboBoxComponent/ComboBoxComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  filterAnimals,
  getAllRaces,
  getAllSpecies,
} from "../../../store/animal";

const AnimalsFilter = () => {
  const dispatch = useDispatch();

  const [raceCombo, setRaceCombo] = useState(null);
  const [speciesCombo, setSpeciesCombo] = useState(null);

  const races = useSelector((state) => {
    const races = state.animals?.races?.map((race, index) => {
      return {
        name: race.name,
        value: `${index}`,
      };
    });
    const updatedRaces = races.slice(0, -1);
    return updatedRaces;
  });

  const species = useSelector((state) => {
    const species = state.animals?.species?.map((specie, index) => {
      return {
        name: specie.name,
        value: `${index}`,
      };
    });
    const updatedSpecies = species.slice(0, -1);
    return updatedSpecies;
  });

  const [formState, setFormState] = useState({
    races: { value: races[0]?.name || "", valid: false },
    species: { value: species[0]?.name || "", valid: false },
    minAge: { value: "", valid: false },
    maxAge: { value: "", valid: false },
  });

  useEffect(() => {
    dispatch(getAllRaces());
    dispatch(getAllSpecies());
  }, [dispatch]);

  const handleSubmit = () => {
    const race = races.find((r) => r.value === raceCombo)?.name;
    const specie = species.find((s) => s.value === speciesCombo)?.name;
    const minAge = formState.minAge.value;
    const maxAge = formState.maxAge.value;
    dispatch(filterAnimals({ race, specie, minAge, maxAge }));
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

  return (
    <div className="w-60 bg-slate-100 flex flex-col gap-5 p-5 ">
      <ComboBoxComponent items={species} modifySelectedValue={onSpeciesChange}>
        Espèces
      </ComboBoxComponent>
      <ComboBoxComponent items={races} modifySelectedValue={onRacesChange}>
        Races
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
