import axios from 'config';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from 'config';
import { useDispatch } from 'react-redux';

export const logIn = createAsyncThunk(
	'auth/login',
	async (credentials, thunkAPI) => {
		try {
			const { data } = await axios.post('/auth/login', credentials);
			setAuthHeader(data.accessToken);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkAPI) => {
		try {
			const password = credentials.password;
			const { data } = await axios.post('/auth/register', credentials);
			const email = data.email;
			const dispatch = useDispatch();
			const loggedUser = dispatch(logIn({ email, password }));

			setAuthHeader(loggedUser.data.refreshToken);
			return logIn.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logOut = createAsyncThunk(
	'auth/logout',
	async (accessToken, thunkAPI) => {
		setAuthHeader(accessToken);
		try {
			await axios.post('/auth/logout');
			clearAuthHeader();
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const refreshUser = createAsyncThunk(
	'auth/refresh',
	async (sid, thunkAPI) => {
		const state = thunkAPI.getState();
		const persistedToken = state.auth.refreshToken;

		if (persistedToken === null) {
			return thunkAPI.rejectWithValue('Unable to fetch user');
		}

		try {
			setAuthHeader(persistedToken);
			const { data } = await axios.post('/auth/refresh', sid);
			console.log(data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const loginWithGoogle = createAsyncThunk(
	'auth/loginwithgoogle',
	async (_, thunkAPI) => {
		// axios.defaults.headers.common['Access-Control-Allow-Origin'] = `*`;
		try {
			const res = await axios.get('/auth/google');
			console.log(res);
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
