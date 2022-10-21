import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {libraryReducer} from './library/librarySlice';
import { authReducer } from './auth/authSlice';

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['accessToken', 'refreshToken', 'sid', 'userData'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(persistConfig, authReducer),
		library: libraryReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
