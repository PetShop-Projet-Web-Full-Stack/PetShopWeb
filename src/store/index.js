import { configureStore } from "@reduxjs/toolkit";
import { animalSlice } from "./animal";
import { animalerieSlice } from "./animalerie";

export const store = configureStore({
  reducer: {
    animals: animalSlice.reducer,
    animalerie: animalerieSlice.reducer,
  },
});
