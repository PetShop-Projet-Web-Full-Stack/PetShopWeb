import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const doInscription = createAsyncThunk(
  "user/inscription",
  async ({ name, email, password, confirmation }) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie");
      await RequestApi.post("api/register", {
        name,
        email,
        password,
        password_confirmation: confirmation,
      });
      return {
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        error: true,
      };
    }
  }
);

export const doConnexion = createAsyncThunk(
  "/user/connexion",
  async ({ email, password }) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie");
      await RequestApi.post("api/login", {
        email,
        password,
      });
      const response = await RequestApi.get("api/user");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const doConnectSessionUser = createAsyncThunk(
  "/user/sessionConnect",
  async () => {
    try {
      const response = await RequestApi.get("api/user");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const doLogoutUser = createAsyncThunk("/user/logoutUser", async () => {
  try {
    const response = await RequestApi.post("api/logout");
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const doChangePassword = createAsyncThunk(
  "/user/forgot-password",
  async ({ email }) => {
    try {
      await RequestApi.get("sanctum/csrf-cookie");
      await RequestApi.post("/api/forgot-password", {
        email,
      });
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
      })
      .addCase(doChangePassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doChangePassword.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(doChangePassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(doConnectSessionUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doConnectSessionUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(doConnectSessionUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(doLogoutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(doLogoutUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
      })
      .addCase(doLogoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
