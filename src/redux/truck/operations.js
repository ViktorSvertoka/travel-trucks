import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "/src/api/trucksAPI";

export const fetchTrucks = createAsyncThunk(
  "trucks/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await API.get("/campers");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTruckDetails = createAsyncThunk(
  "trucks/fetchById",
  async (id, thunkApi) => {
    try {
      const response = await API.get(`/campers/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
