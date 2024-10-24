import { createSlice } from '@reduxjs/toolkit';
import { fetchTruckDetails, fetchTrucks } from './operations';
import { initialState } from './initialState';

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const truckSlice = createSlice({
  name: 'trucks',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending,handlePending)
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.trucks = action.payload.items;
      })
          .addCase(fetchTrucks.rejected, handleRejected)
      .addCase(fetchTruckDetails.pending,handlePending)
      .addCase(fetchTruckDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.truck = action.payload;
      })
      .addCase(fetchTruckDetails.rejected, handleRejected);
  },
});

export const truckReducer = truckSlice.reducer;