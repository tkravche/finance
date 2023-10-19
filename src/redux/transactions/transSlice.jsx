import { createSlice } from '@reduxjs/toolkit';

import {
  createTransactionThunk,
  deleteTransactionThunk,
  editTransactionsThunk,
  getTransactionCategoriesThunk,
  getTransactionsStatisticThunk,
  getTransactionsThunk,
} from './transOperations';

const initialState = {
  transactions: [],
  summary: [],
  categories: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: '@@transactions',
  initialState,
  extraReducers: builder =>
    builder
      //--------------------------- Get Transactions Statistics -----------------------------
      .addCase(getTransactionsStatisticThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.summary = action.payload;
      })
      //----------------------------- Get transaction categories -----------------------------
      .addCase(getTransactionCategoriesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      //--------------------------- Get Transactions -----------------------------
      .addCase(getTransactionsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.transactions = payload;
      })
      //--------------------------- Ctreate Transaction -----------------------------
      .addCase(createTransactionThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      //----------------------------- Edit transaction  -----------------------------
      .addCase(editTransactionsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.transactions.findIndex(
          t => t.id === action.payload.id
        );
        state.transactions[index] = action.payload;
      })
      //----------------------------- Delete transaction  -----------------------------
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== action.payload.id
        );
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

export const transactionsReducer = transactionsSlice.reducer;
