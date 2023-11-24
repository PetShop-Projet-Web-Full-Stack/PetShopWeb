import { configureStore } from "@reduxjs/toolkit";
import { animalSlice } from "./animal";
import { animalerieSlice } from "./animalerie";
import { userSlice } from "./user";
import { questionSlice } from "./questionnaire";

export const store = configureStore({
  reducer: {
    animals: animalSlice.reducer,
    animalerie: animalerieSlice.reducer,
    user: userSlice.reducer,
    question: questionSlice.reducer,
  },
});
