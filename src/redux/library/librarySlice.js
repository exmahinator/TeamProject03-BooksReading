import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    statistics: [],
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  extraReducers: {},
});

export default librarySlice.reducer;