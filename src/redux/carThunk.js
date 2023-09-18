import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdvert } from "../api/fetchAdvert";

export const getCarThunk = createAsyncThunk('cars/getAllCar', async(page) => {
        return await fetchAdvert(page)
})