import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { setToken } from '../../services/walletURL';
import {
  createTransaction,
  deleteTransaction,
  getTransactionCategories,
  getTransactions,
  getTransactionsSummaryRequest,
  patchTransaction,
} from '../../services/transactions.API';

export const getTransactionsStatisticThunk = createAsyncThunk(
  '@@transactions/getTransactionsSummaryThunk',
  async (params, { rejectWithValue }) => {
    try {
      const transactionSummary = await getTransactionsSummaryRequest(params);
      return transactionSummary;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getTransactionCategoriesThunk = createAsyncThunk(
  '@@transactions/getTransactionCategoriesThunk',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    try {
      return await getTransactionCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  '@@transactions/getTransactionsThunk',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    try {
      return await getTransactions();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const createTransactionThunk = createAsyncThunk(
  '@@transactions/createTransactionThunk',
  async (transinfo, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    setToken(token);
    try {
      return await createTransaction(transinfo);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const editTransactionsThunk = createAsyncThunk(
  '@@transactions/patchTransactionsThunk',
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const editTransaction = await patchTransaction(id, updatedData);
      toast.success('Transaction edited successfully!');
      return editTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteTransactionThunk = createAsyncThunk(
  '@@transactions/deleteTransactionsThunk',
  async (transactionId, { rejectWithValue }) => {
    try {
      const delTransaction = await deleteTransaction(transactionId);
      toast.success('Transaction deleted successfully!');
      return delTransaction;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
