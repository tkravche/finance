import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser } from '../../services/authAPI';

export const registerThunk = createAsyncThunk(
  '@@auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      return await registerUser(credentials);
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
