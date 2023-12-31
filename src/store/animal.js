import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const filterAnimals = createAsyncThunk(
  "/animals/filterAnimals",
  async (payload) => {
    let url = "api/animals?";
    if (payload.race) {
      url += `race=${payload.race}&`;
    }
    if (payload.specie) {
      url += `species=${payload.specie}&`;
    }
    if (payload.minAge) {
      url += `age_min=${payload.minAge}&`;
    }
    if (payload.maxAge) {
      url += `age_max=${payload.maxAge}`;
    }

    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get(url);
      return response.data;
    });
  }
);

export const getAllRaces = createAsyncThunk("/races/fetchRaces", async () => {
  return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
    const response = await RequestApi.get("/api/races");
    return response.data;
  });
});

export const getAllSpecies = createAsyncThunk(
  "/species/fetchSpecies",
  async () => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get("/api/species");
      return response.data;
    });
  }
);

export const addAnimalFavorite = createAsyncThunk(
  "/api/animals-user/",
  async (payload) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie").then(async () => {
        const response = await RequestApi.post(`api/animals-user/`, payload);
        return response.data;
      });
    } catch (error) {
      console.error(error);
      return {
        error: true,
      };
    }
  }
);

export const deleteAnimalFavorite = createAsyncThunk(
  "/api/animals-user/",
  async (payload) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie").then(async () => {
        const response = await RequestApi.delete(
          `api/animals-user/${payload.id}`
        );
        return response.data;
      });
    } catch (error) {
      console.error(error);
      return {
        error: true,
      };
    }
  }
);

export const animalSlice = createSlice({
  name: "animals",
  initialState: {
    animals: [],
    races: [],
    species: [],
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
      })
      .addCase(filterAnimals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterAnimals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animals = action.payload;
      })
      .addCase(filterAnimals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAllRaces.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllRaces.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.races = action.payload;
      })
      .addCase(getAllRaces.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAllSpecies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllSpecies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.species = action.payload;
      })
      .addCase(getAllSpecies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addAnimalFavorite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAnimalFavorite.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (state.animals.length > 0) {
          const animal = state.animals.find(
            (animal) => animal.id === action.meta.arg.id
          );
          animal.is_favorite = !animal.is_favorite;
        }
      })
      .addCase(addAnimalFavorite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
