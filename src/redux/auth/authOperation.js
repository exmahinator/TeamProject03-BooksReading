import axios from 'config';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthHeader, clearAuthHeader } from 'config';
import { useDispatch } from 'react-redux';

// "password": "TestUser123"

// Відповідь від бекенда при Register
// {
//   "name": "TestName",
//   "email": "TestUser@example.com",
//   "id": "635009c53551fd60da50fc5f"
// }

// Відповідь від бекенда при LogIn
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

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.refreshToken);
      return res.data;
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
      const res = await axios.post('/auth/register', credentials);
      const email = res.email;
      const dispatch = useDispatch();
      const loggedUser = dispatch(logIn({ email, password }));

      setAuthHeader(loggedUser.data.refreshToken);
      return logIn.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ------------------------------------------------------------------------------------------------------------------------
// Доробити:
// ------------------------------------------------------------------------------------------------------------------------

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/refresh');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
