import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk } from "./carThunk";
import { useLocation } from "react-router-dom";

const initialState = {
  car: {},
  favorite: [],
  items: [],
  isLoading: false,
  error: null,
  page: 1,
};
const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCar: (state, { payload }) => {
      state.car = payload;
    },
    setFavorite: (state, { payload }) => {
      const index = state.favorite.findIndex(id=> id===payload)
      if (index>=0) {
        state.favorite.splice(index, 1);
      } else {
        state.favorite.push(payload);
      }
    },
    setItems: (state, { payload }) => {
      state.items = payload
    },
    setPage: (state, { payload }) => {
      state.page = payload +1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload);
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCar, setFavorite, setItems, setPage } = carSlice.actions;
export const carReducer = carSlice.reducer;
