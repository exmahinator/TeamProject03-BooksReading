import axios from 'axios';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const initialState = {
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
	error: null,
};

export default axios;
