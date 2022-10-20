// import axios from 'config';

// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const addBookToRead = createAsyncThunk(
// 	'book/addBook',
// 	async (bookData, thunkAPI) => {
// 		try {
// 			const { data } = await axios.post('/book', bookData);
// 			console.log('data:', data);
// 			return data;
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error.message);
// 		}
// 	}
// );
