export const selectIsLogin = state => state.auth.isLogin;
export const selectAuthData = state => state.auth.userData;
export const selectAuthDataBalance = state => state.auth.userData?.balance;
export const selectAuthIsLoadingStatus = state => state.auth.isLoading;
export const selectAuthErrorStatus = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectUserEmail = state => state.auth.userData?.email;