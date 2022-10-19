import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Відповідь від бекенда проекту при виконанні функції LogIn
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

export const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  userData: {
    name: null,
    email: null,
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
    id: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

export default axios;
