import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import { refreshUser } from 'redux/auth/authOperation';
import { getSid } from 'redux/auth/authSelector';

export const App = () => {
	const sid = useSelector(getSid);
	console.log(sid);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser({ sid }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
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
							<TrainingPage />
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
	);
};
