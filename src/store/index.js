import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const getAllAnimals = createAsyncThunk(
  "animals/fetchAnimals",
  async (payload) => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get("api/animals");
      return response.data;
    });
  }
);

export const animalSlice = createSlice({
  name: "animals",
  initialState: {
    animals: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllAnimals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAnimals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animals = action.payload;
      })
      .addCase(getAllAnimals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const store = configureStore({
  reducer: {
    animals: animalSlice.reducer,
  },
});
