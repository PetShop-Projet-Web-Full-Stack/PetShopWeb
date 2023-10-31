import React, { useState } from "react";
import InputFormComponent from "../../atoms/InputFormComponent/InputFormComponent";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";
import { handleInputChange } from "../../toolkit/form.service";
import {
  AdjustmentsHorizontalIcon,
  HomeIcon,
  ArchiveBoxArrowDownIcon,
  ArrowLeftOnRectangleIcon,
  DocumentDuplicateIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import ComboBox from "../../atoms/ComboBox/ComboBox";

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

  const [comboBoxSelectedValue, setComboBoxSelectedValue] = useState(null);

  const modifySelectedValueComboBox = (item) => {
    setComboBoxSelectedValue(item);
  };

  const comboBoxItems = [
    {
      icon: PencilIcon,
      name: "Modifier",
      value: 0,
    },
    {
      icon: DocumentDuplicateIcon,
      name: "Dupliquer",
      value: 1,
    },
    {
      icon: ArchiveBoxArrowDownIcon,
      name: "Archiver",
      value: 2,
    },
    {
      icon: ArrowLeftOnRectangleIcon,
      name: "Se déplacer",
      value: 3,
    },
    {
      icon: TrashIcon,
      name: "Supprimer",
      value: 4,
    },
  ];

  const DrowDowns = [
    {
      icon: HomeIcon,
      name: "Home",
      path: "/",
    },
    {
      icon: AdjustmentsHorizontalIcon,
      name: "Management",
      path: "/Managements",
    },
  ];

  return (
    <form className="w-60 bg-slate-100 flex-col p-5" onSubmit={handleSubmit}>
      <ComboBox
        items={comboBoxItems}
        modifySelectedValue={modifySelectedValueComboBox}
      />
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
