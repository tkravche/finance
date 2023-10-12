import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  currentUser,
  logOutUser,
  loginUser,
  registerUser,
} from '../../services/authAPI';

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

export const loginThunk = createAsyncThunk(
  '@@auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      return await loginUser(credentials);
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  '@@auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      return await logOutUser();
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const currentUserThunk = createAsyncThunk(
  '@@auth/currentUser',
  async (_, { rejectWithValue }) => {
    try {
      return await currentUser();
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
