import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const getAllFavorites = createAsyncThunk(
    "favorites/fetchFavorites",
    async () => {
        return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
            const response = await RequestApi.get("api/animals-user");
            return response.data;
        });
    }
);

export const getAnimalFavoritesById = createAsyncThunk(
    "/animal/:id",
    async (payload) => {
        return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
            const response = await RequestApi.get(`api/animal/${payload.animal_id}`);
            return response.data;
        });
    }
);

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: {},
        favorites: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllFavorites.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllFavorites.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.favorites = action.payload;
            })
            .addCase(getAllFavorites.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getAnimalFavoritesById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAnimalFavoritesById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.favorites = action.payload;
            })
            .addCase(getAnimalFavoritesById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});
