import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdvert } from "../api/fetchAdvert";

export const getCarThunk = createAsyncThunk(
  "cars/getAllCar",
  async (page, thunkAPI) => {
    try {
      return await fetchAdvert(page);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
