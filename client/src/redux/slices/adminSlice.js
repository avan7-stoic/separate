// src/redux/slices/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharityApplications = createAsyncThunk(
  'admin/fetchCharityApplications',
  async () => {
    const response = await axios.get('/api/admin/charity-applications');
    return response.data;
  }
);

export const handleApplicationStatus = createAsyncThunk(
  'admin/handleApplicationStatus',
  async ({ id, status }) => {
    const response = await axios.patch(`/api/admin/charity-applications/${id}`, { status });
    return { id, status: response.data.status };
  }
);

export const deleteCharity = createAsyncThunk(
  'admin/deleteCharity',
  async (id) => {
    await axios.delete(`/api/admin/charities/${id}`);
    return id;
  }
);

export const fetchDonorInsights = createAsyncThunk(
  'admin/fetchDonorInsights',
  async () => {
    const response = await axios.get('/api/admin/donors');
    return response.data;
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    charityApplications: [],
    charities: [],
    donors: [],
    stories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharityApplications.fulfilled, (state, action) => {
        state.charityApplications = action.payload;
      })
      .addCase(handleApplicationStatus.fulfilled, (state, action) => {
        state.charityApplications = state.charityApplications.filter(
          app => app.id !== action.payload.id
        );
      })
      .addCase(deleteCharity.fulfilled, (state, action) => {
        state.charities = state.charities.filter(
          charity => charity.id !== action.payload
        );
      })
      .addCase(fetchDonorInsights.fulfilled, (state, action) => {
        state.donors = action.payload;
      });
  },
});

export default adminSlice.reducer;
