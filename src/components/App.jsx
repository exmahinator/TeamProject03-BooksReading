import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './Layout';
import { AuthLogin } from '../pages/AuthLogin';
import { LibraryPage } from '../pages/LibraryPage';
import { TrainingPage } from '../pages/TrainingPage';
import { StatisticsPage } from '../pages/StatisticsPage';
import { AuthRegistration } from '../pages/AuthRegistration';
import PrivateRoute from './Route/PrivatePoute';
import PublicRoute from './Route/PublicRoute';
import { refreshUser, loginWithGoogle } from 'redux/auth/authOperation';
import { getSid, getIsRefreshing } from 'redux/auth/authSelector';
import { getCurrentlyReading } from 'redux/library/librarySelector';
// import { getAccessToken } from '../redux/auth/authSelector';
// import { userBooks, getBookPlanning } from '../redux/library/libraryOperation';

export const App = () => {
	const [searchParams] = useSearchParams();
	const accessTokenParams = searchParams.get('accessToken');
	const refreshTokenParams = searchParams.get('refreshToken');
	const sidParams = searchParams.get('sid');
	console.log();
	const sid = useSelector(getSid);
	const isRefreshing = useSelector(getIsRefreshing);
	const currentlyReading = useSelector(getCurrentlyReading);

	// const accessToken = useSelector(getAccessToken);

	const dispatch = useDispatch();

	useEffect(() => {
		if (accessTokenParams) {
			dispatch(
				loginWithGoogle({ accessTokenParams, refreshTokenParams, sidParams })
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		dispatch(refreshUser({ sid }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		!isRefreshing && (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="/login" />} />
					<Route
						path="/login"
						element={
							<PublicRoute redirect="/library" restricted>
								<AuthLogin />
							</PublicRoute>
						}
					/>
					<Route
						path="/register"
						element={
							<PublicRoute redirect="/library" restricted>
								<AuthRegistration />
							</PublicRoute>
						}
					/>
					<Route
						path="/library"
						element={
							<PrivateRoute redirect="/">
								<LibraryPage />
							</PrivateRoute>
						}
					/>
					<Route
						path="/training"
						element={
							<PrivateRoute redirect="/">
								{currentlyReading.length > 0 ? (
									<Navigate to="/statistics" />
								) : (
									<TrainingPage />
								)}
							</PrivateRoute>
						}
					/>
					<Route
						path="/statistics"
						element={
							<PrivateRoute redirect="/">
								<StatisticsPage />
							</PrivateRoute>
						}
					/>

					<Route path="*" element={<AuthLogin />} />
				</Route>
			</Routes>
		)
	);
};
