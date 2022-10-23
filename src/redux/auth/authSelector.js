export const getUserEmail = state => state.auth.userData.email;
export const getUserName = state => state.auth.userData.name;
export const getSid = state => state.auth.sid;
export const getAccessToken = state => state.auth.accessToken;
export const getGoodleLogin = state => state.auth.googleLogin;
export const getIsRegistered = state => state.auth.isRegistered;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsRefreshing = state => state.auth.isRefreshing;

