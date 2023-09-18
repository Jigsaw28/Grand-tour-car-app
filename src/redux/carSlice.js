import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk } from "./carThunk";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};
const carSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
          state.isLoading = false;
          state.items = action.payload;
      })
      .addCase(getCarThunk.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
      });
  },
});

export const carReducer = carSlice.reducer;
