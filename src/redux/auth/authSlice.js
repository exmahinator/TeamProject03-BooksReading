import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperation';

const initialState = {
	accessToken: null,
	refreshToken: null,
	sid: null,
	userData: {
		name: null,
		email: '',
		goingToRead: [],
		currentlyReading: [],
		finishedReading: [],
		id: null,
	},
	isLoggedIn: false,
	isRefreshing: false,
	isRegistered: false,
	googleRegistration: null,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
				state.userData = action.payload.userData;
				state.sid = action.payload.sid;
				state.accessToken = action.payload.accessToken;
				state.refreshToken = action.payload.refreshToken;
				state.isLoggedIn = true;
		},
		[logIn.fulfilled](state, action) {
			state.userData = action.payload.userData;
			state.sid = action.payload.sid;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.isLoggedIn = true;
		},
		[logOut.fulfilled](state) {
			state.sid = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.isLoggedIn = false;
			state.userData.email = '';
		},
		[refreshUser.pending](state) {
			state.isRefreshing = true;
		},
		[refreshUser.fulfilled](state, action) {
			state.accessToken = action.payload.newAccessToken;
			state.refreshToken = action.payload.newRefreshToken;
			state.sid = action.payload.newSid;
			state.isLoggedIn = true;
			state.isRefreshing = false;
		},
		[refreshUser.rejected](state) {
			state.isRefreshing = false;
		},
	},
});

export const authReducer = authSlice.reducer;
