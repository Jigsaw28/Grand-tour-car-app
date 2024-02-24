import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdvert, fetchMakes } from "../api/fetchAdvert";

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

export const getMakeThunk = createAsyncThunk("cars/getAllMakes",
  async (_, thunkAPI) => {
  try {
    return await fetchMakes();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})