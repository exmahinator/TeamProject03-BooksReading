import axios from 'config';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader } from 'config';

export const userBooks = createAsyncThunk(
    'book/userBooks',
    async (_, thunkAPI) => {
        try {
			const { data } = await axios.get('user/books');
			// console.log('userBooks', data)
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)

export const addBookToRead = createAsyncThunk(
	'book/addBook',
	async (bookData, thunkAPI) => {
		try {
			const { data } = await axios.post('/book', bookData);
			// console.log('data:', data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addBookPlanning = createAsyncThunk(
	'book/addBookPlanning',
	async (planningData, thunkAPI) => {
		try {
			const { data } = await axios.post('/planning', planningData);
			console.log('data:', data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const getBookPlanning = createAsyncThunk(
    'book/getBookPlanning',
    async (_, thunkAPI) => {
		try {
			const { data } = await axios.get('/planning');
			// console.log('getBookPlanning:', data);
			return data;
		} catch (error) {
			return console.log(error.message);
			// return thunkAPI.rejectWithValue(error.message);
		}
	}
)

export const addFinishedPages = createAsyncThunk(
    'book/addFinishedPages',
    async (pages, thunkAPI) => {
		try {
			const { data } = await axios.patch('/planning', pages);
			console.log('addFinishedPages:', data);
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
)