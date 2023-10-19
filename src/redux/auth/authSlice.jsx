import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './authOperations';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  userData: { username: '' },
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
        state.isLoggedIn = true;
      })
      //--------------------------- Log in -----------------------------

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      //--------------------------- Log out -----------------------------

      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      //--------------------------- current User -----------------------------

      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userData = payload;
        state.isLoggedIn = true;
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
