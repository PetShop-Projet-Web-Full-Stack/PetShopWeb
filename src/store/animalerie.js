import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const getAllAnimalerie = createAsyncThunk(
  "animalerie/fetchAnimalerie",
  async () => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {

      const response = await RequestApi.get("api/pet-shops");
      return response.data;
    });
  }
);

export const filterAnimalerie = createAsyncThunk(
  "/animalerie/filterAnimalerie",
  async (payload) => {
    let url = "api/pet-shops?";
    if (payload.city) {
      url += `city=${payload.city}&`;
    }
    if (payload.zipcode) {
      url += `zipcode=${payload.zipcode}&`;
    }

    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get(url);
      return response.data;
    });
  }
);

export const getAnimalerieById = createAsyncThunk(
  "/animalerie/:id",
  async (payload) => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get(`api/pet-shops/${payload.id}`);
      return response.data;
    });
  }
);

export const animalerieSlice = createSlice({
  name: "animalerie",
  initialState: {
    animalerie: {},
    animaleries: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllAnimalerie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllAnimalerie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animaleries = action.payload;
      })
      .addCase(getAllAnimalerie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(filterAnimalerie.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterAnimalerie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animaleries = action.payload;
      })
      .addCase(filterAnimalerie.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAnimalerieById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimalerieById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animalerie = action.payload;
      })
      .addCase(getAnimalerieById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
