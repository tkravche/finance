import { instance } from './walletURL';

export async function getTransactionCategories() {
    const { data } = await instance.get('/transaction-categories');
    return data;
  };

export async function getTransactionsSummaryRequest (params) {
    const { data } = await instance.get('/transactions-summary', { params });
    return data;
  };

  export async function getTransactions() {
    const { data } = await instance.get('/transactions');
    return data;
}

export async function createTransaction(transinfo) {
  console.log(transinfo)
    const { data } = await instance.post('/transactions',transinfo);
    return data;
}

export async function patchTransaction (transactionId, updatedData) {
    const { data } = await instance.patch(
      `/transactions/${transactionId}`,
      updatedData
    );
    return data;
  };

  export async function deleteTransaction(transactionId) {
    const { data } = await instance.delete(`/transactions/${transactionId}` );
    return data;
}