import { createSlice } from "@reduxjs/toolkit";
import { getCarThunk } from "./carThunk";

const initialState = {
  car: {},
  allAdverts: [],
  favorite: [],
  filterCar: null,
  items: [],
  isLoading: false,
  error: null,
};
const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilterCar: (state, { payload }) => {
      state.filterCar = payload;
    },
    setCar: (state, { payload }) => {
      state.car = payload;
    },
    setFavorite: (state, { payload }) => {
      const index = state.favorite.findIndex((id) => id === payload);
      if (index >= 0) {
        state.favorite.splice(index, 1);
      } else {
        state.favorite.push(payload);
      }
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAdverts.push(...action.payload);
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCar, setFavorite, setItems, setFilterCar } =
  carSlice.actions;
export const carReducer = carSlice.reducer;
