export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectAuthData = state => state.auth.userData;
export const selectAuthDataBalance = state => state.auth.userData?.balance;
export const selectAuthIsLoadingStatus = state => state.auth.isLoading;
export const selectAuthErrorStatus = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserEmail = state => state.auth.userData?.email;
export const selectUserName = state => state.auth.userData?.username;

export const selectTransactionsSummary = state => state.transactions.summary;
export const selectCategoriesSummaryName = state =>
  state?.transactions.summary.categoriesSummary.name;
export const selectTransactionsCategories = state =>
  state.transactions.categories;
export const selectAllTransactions = state => state.transactions.transactions;
export const selectTransactionsIsLoadingStatus = state =>
  state.transactions.isLoading;
export const selectTransactionsErrorStatus = state => state.transactions.error;