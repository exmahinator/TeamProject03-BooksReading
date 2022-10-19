import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';
import { initialState } from 'config';

// Стейт з роботи Репети:
// const initialState = {
//   user: { name: null, email: null },
//   token: null,
// isLoggedIn: false,
// isRefreshing: false,
// };

// Перевірити всі залежності відносно нашого бекенду т.я. те що нижче - це приклад з відео Репети. У нього з бекенду приходив наступний об'єкт:
// {
//   "user": {
//     "name": "Tina Cross",
//     "email": "tcross@mail.com"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUwMGQyNTdiZjdlODAwMTZjZDA4YmEiLCJpYXQiOjE2NjYxOTEwMjZ9.dYPoRcR8SB3uSUmqv0Te_Zw-oQro5LKqvOkmECrXR1E"
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

// Відповідь від бекенда проекту при Register
// {
//   "name": "TestName",
//   "email": "TestUser@example.com",
//   "id": "635009c53551fd60da50fc5f"
// }

// Відповідь від бекенда проекту при LogIn
// {
//   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzUwMDljNTM1NTFmZDYwZGE1MGZjNWYiLCJzaWQiOiI2MzUwMGEwMTM1NTFmZDYwZGE1MGZjNjAiLCJpYXQiOjE2NjYxODk4MjUsImV4cCI6MTY2NjE5MzQyNX0.0y-pfrTi-Sb30n8kn4pbea_Slpr0htUQpwIuvc24jis",
//   "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzUwMDljNTM1NTFmZDYwZGE1MGZjNWYiLCJzaWQiOiI2MzUwMGEwMTM1NTFmZDYwZGE1MGZjNjAiLCJpYXQiOjE2NjYxODk4MjUsImV4cCI6MTY2ODgxNzgyNX0.Rxhd0ACkDihjDMIa5tqVlHzcse5d9BIABp0rye5z41M",
//   "sid": "63500a013551fd60da50fc60",
//   "userData": {
//     "name": "TestName",
//     "email": "TestUser@example.com",
//     "goingToRead": [],
//     "currentlyReading": [],
//     "finishedReading": [],
//     "id": "635009c53551fd60da50fc5f"
//   }
// }

// Наче має бути вірно - все, окрім Google зроблено - потрібна перевірка ментора, можливо для кожного запиту дописати pending чи rejected з заповненням відповідного поля у стейті
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.token = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.token = action.payload.sid;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state = initialState;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.userData = action.payload.userData;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
