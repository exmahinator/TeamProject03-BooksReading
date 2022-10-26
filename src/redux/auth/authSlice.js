import { createSlice } from '@reduxjs/toolkit';
import {
	register,
	logIn,
	logOut,
	refreshUser,
	loginWithGoogle,
} from './authOperation';

const initialState = {
	accessToken: null,
	refreshToken: null,
	sid: null,
	userData: {
		name: '',
		email: '',
		// goingToRead: [],
		// currentlyReading: [],
		// finishedReading: [],
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
			// state.userData = action.payload.userData;
			state.userData.name = action.payload.userData.name;
			state.sid = action.payload.sid;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.isLoggedIn = true;
		},
		[logIn.fulfilled](state, action) {
			// state.userData = action.payload.userData;
			state.userData.name = action.payload.userData.name;
			state.userData.email = action.payload.userData.email;
			state.userData.id = action.payload.userData.id;
			state.sid = action.payload.sid;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.isLoggedIn = true;
		},
		[logOut.fulfilled](state) {
			state.userData.name = '';
			state.userData.email = '';
			state.userData.id = '';
			state.sid = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.isLoggedIn = false;
			state.userData.email = '';
			state.userData.name = '';
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
		[loginWithGoogle.pending](state) {
			state.isRefreshing = true;
		},
		[loginWithGoogle.fulfilled](state, action) {
			state.accessToken = action.payload.accessTokenParams;
			state.refreshToken = action.payload.refreshTokenParams;
			state.sid = action.payload.sidParams;
			state.isLoggedIn = true;
			state.userData.name = action.payload.data.name;
		},
	},
});

export const authReducer = authSlice.reducer;
