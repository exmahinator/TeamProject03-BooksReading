// import { createSlice } from '@reduxjs/toolkit';
// import { addBookToRead } from './libraryOperation';
// import { initialState } from 'config';

// export const initialState = {
// 	accessToken: null,
// 	refreshToken: null,
// 	sid: null,
// 	userData: {
// 		name: null,
// 		email: '',
// 		goingToRead: [],
// 		currentlyReading: [],
// 		finishedReading: [],
// 		id: null,
// 	},
// 	isLoggedIn: false,
// 	isRefreshing: false,
// 	error: null,
// };

// {
//   "title": "The Book of Five Rings",
//   "author": "Miyamoto Musashi",
//   "publishYear": 1643,
//   "totalPages": 110,
//   "pagesFinished": 0,
//   "_id": "507f1f77bcf86cd799439013",
//   "__v": 0
// }

// const librarySlice = createSlice({
// 	name: 'book',
// 	initialState,
// 	extraReducers: {
// 		[addBookToRead.fulfilled](state, action) {
// 			return state.userData.goingToRead.push(action.payload);
// 		},
// [logIn.fulfilled](state, action) {
// 	state.userData = action.payload.userData;
// 	state.sid = action.payload.sid;
// 	state.accessToken = action.payload.accessToken;
// 	state.refreshToken = action.payload.refreshToken;
// 	state.isLoggedIn = true;
// },
// [logOut.fulfilled](state) {
// 	state.sid = null;
// 	state.accessToken = null;
// 	state.refreshToken = null;
// 	state.isLoggedIn = false;
// 	state.userData.email = '';
// },
// [refreshUser.pending](state) {
// 	state.isRefreshing = true;
// },
// [refreshUser.fulfilled](state, action) {
// 	state.accessToken = action.payload.newAccessToken;
// 	state.refreshToken = action.payload.newRefreshToken;
// 	state.sid = action.payload.newSid;
// 	state.isLoggedIn = true;
// 	state.isRefreshing = false;
// },
// [refreshUser.rejected](state) {
// 	state.isRefreshing = false;
// },
// 	},
// });

// export const libraryReducer = librarySlice.reducer;
