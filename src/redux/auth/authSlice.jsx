import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './authOperations';

const initialState = {
  isLoading: false,
  isLogedIn: false,
  error: null,
  userData: null,
  token: null,
};

const authSlice = createSlice({
  name: '@@auth',
  initialState,
  extraReducers: builder =>
    builder
      //--------------------------- Register -----------------------------
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
      })
      //--------------------------- Log in -----------------------------

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
      })
      //--------------------------- Log out -----------------------------

      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
        state.isLogedIn = false;
      })
      //--------------------------- current User -----------------------------

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isLogedIn = true;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
