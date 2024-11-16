
// src/redux/slices/donorSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharities = createAsyncThunk(
  'donor/fetchCharities',
  async () => {
    const response = await axios.get('/api/charities');
    return response.data;
  }
);

export const submitDonation = createAsyncThunk(
  'donor/submitDonation',
  async (donationDetails) => {
    const response = await axios.post('/api/donations', donationDetails);
    return response.data;
  }
);

export const fetchDonationHistory = createAsyncThunk(
  'donor/fetchDonationHistory',
  async () => {
    const response = await axios.get('/api/donations/history');
    return response.data;
  }
);

const donorSlice = createSlice({
  name: 'donor',
  initialState: {
    charities: [],
    donationHistory: [],
    currentDonation: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    setCurrentDonation: (state, action) => {
      state.currentDonation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.charities = action.payload;
      })
      .addCase(fetchCharities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(submitDonation.fulfilled, (state, action) => {
        state.currentDonation = action.payload;
      })
      .addCase(fetchDonationHistory.fulfilled, (state, action) => {
        state.donationHistory = action.payload;
      });
  },
});

export const { setCurrentDonation } = donorSlice.actions;
export default donorSlice.reducer;