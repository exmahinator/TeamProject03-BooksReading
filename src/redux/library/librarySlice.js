import { createSlice } from '@reduxjs/toolkit';
import { addBookToRead, addBookPlanning, getBookPlanning, addFinishedPages } from './libraryOperation';
import { logIn } from '../auth/authOperation';

const initialState = {
	goingToRead: [],
	currentlyReading: [],
  finishedReading: [],
  startDate: null,
  endDate: null,
  stats: [],
  
	error: null,
};

// {
//   "title": "The Book of Five Rings",
//   "author": "Miyamoto Musashi",
//   "publishYear": 1643,
//   "totalPages": 110,
//   "pagesFinished": 0,
//   "_id": "507f1f77bcf86cd799439013",
//   "__v": 0
// }

const librarySlice = createSlice({
	name: 'book',
	initialState,
  extraReducers: {
    [logIn.fulfilled](state, action) {
      state.goingToRead = action.payload.userData.goingToRead;
      state.currentlyReading = action.payload.userData.currentlyReading;
    },
      [addBookToRead.fulfilled](state, action) {
        state.goingToRead.push(action.payload.newBook)
    },
    [addBookPlanning.fulfilled](state, action) {
      state.currentlyReading.push(action.payload.books)
      state.startDate = action.payload.startDate
      state.endDate = action.payload.endDate
    },
      [getBookPlanning.fulfilled] (state, action) {
      state.currentlyReading.push(action.payload.planning.books)
      state.startDate = action.payload.planning.startDate
        state.endDate = action.payload.planning.endDate
        state.stats = action.payload.planning.stats
    },
    [addFinishedPages.fulfilled](state, action) {
        state.stats = action.payload.planning.stats
      }
      
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
	},
});

export const libraryReducer = librarySlice.reducer;
