import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RequestApi } from "../toolkit/requestApi";

export const getQuestions = createAsyncThunk(
  "/question/getQuestions",
  async () => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.get("api/questions");
      return response.data;
    });
  }
);


export const getAnimalsModel = createAsyncThunk(
  "/question/getAnimalsModel",
  async (answers) => {
    return await RequestApi.get("sanctum/csrf-cookie").then(async () => {
      const response = await RequestApi.post("api/questions/answers", {
        answers: answers,
      });
      return response.data;
    });
  }
);


export const questionSlice = createSlice({
  name: "question",
  initialState: {
    questions: [],
    status: "idle",
    error: null,
    animalsModel: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getAnimalsModel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimalsModel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.animalsModel = action.payload;
      })
      .addCase(getAnimalsModel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
