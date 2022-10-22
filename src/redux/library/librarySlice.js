import { createSlice } from '@reduxjs/toolkit';
import {
	userBooks,
	addBookToRead,
	addBookPlanning,
	getBookPlanning,
	addFinishedPages,
} from './libraryOperation';
import { logIn, logOut } from '../auth/authOperation';

const initialState = {
	goingToRead: [],
	currentlyReading: [],
	finishedReading: [],
	startDate: null,
	endDate: null,
	stats: [],

	error: null,
};

const librarySlice = createSlice({
	name: 'book',
	initialState,
	extraReducers: {
		[logIn.fulfilled](state, action) {
			state.goingToRead = action.payload.userData.goingToRead;
			state.currentlyReading = action.payload.userData.currentlyReading;
			state.finishedReading = action.payload.userData.finishedReading;
		},
		[userBooks.fulfilled](state, action) {
			state.goingToRead = action.payload.goingToRead;
			// state.currentlyReading = action.payload.currentlyReading;
			state.finishedReading = action.payload.finishedReading;
		},
		[logOut.fulfilled](state) {
			state.goingToRead = [];
			state.currentlyReading = [];
			state.finishedReading = [];
			state.startDate = null;
			state.endDate = null;
			state.stats = [];
			state.error = null;
		},
		[addBookToRead.fulfilled](state, action) {
			state.goingToRead.push(action.payload.newBook);
		},
		[addBookPlanning.fulfilled](state, action) {
			state.currentlyReading.push(action.payload.books[0]);
			state.startDate = action.payload.startDate;
			state.endDate = action.payload.endDate;
		},
		[getBookPlanning.fulfilled](state, action) {
			state.currentlyReading = [...state.currentlyReading, ...action.payload.planning.books];
			state.startDate = action.payload.planning.startDate;
			state.endDate = action.payload.planning.endDate;
			state.stats = action.payload.planning.stats;
		},
		[addFinishedPages.fulfilled](state, action) {
			state.stats = action.payload.planning.stats;
		},
	},
});

export const libraryReducer = librarySlice.reducer;
