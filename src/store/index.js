import { configureStore } from "@reduxjs/toolkit";
import { animalSlice } from "./animal";

export const store = configureStore({
  reducer: {
    animals: animalSlice.reducer,
  },
});
