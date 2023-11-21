import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const doInscription = createAsyncThunk(
  "user/inscription",
  async ({ name, email, password, confirmation }) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie");
      await RequestApi.post("api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmation,
      });

      const response = await RequestApi.post("api/user");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const doConnexion = createAsyncThunk(
  "/user/connexion",
  async ({ email, password }) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie");
      await RequestApi.post("api/login", {
        email: email,
        password: password,
      });
      const response = await RequestApi.get("api/user");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(doInscription.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doInscription.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(doInscription.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(doConnexion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doConnexion.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(doConnexion.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
