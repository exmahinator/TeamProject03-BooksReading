import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { AuthLogin } from '../pages/AuthLogi';
import { LibraryPage } from '../pages/LibraryPage';
import { TrainingPage } from '../pages/TrainingPage';
import { StatisticsPage } from '../pages/StatisticsPage';
import { AuthRegistration } from '../pages/AuthRegistration';
import PrivateRoute from './Route/PrivatePoute';
import PublicRoute from './Route/PublicRoute';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Navigate to="/login" />} />
				<Route
					path="/login"
					element={
						// <PublicRoute redirect="/library" restricted>
							<AuthLogin />
						// </PublicRoute>
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
						// <PrivateRoute redirect="/">
							<LibraryPage />
						// </PrivateRoute>
					}
				/>
				<Route
					path="/training"
					element={
						// <PrivateRoute redirect="/">
							<TrainingPage />
						// </PrivateRoute>
					}
				/>
				<Route
					path="/statistics"
					element={
						// <PrivateRoute redirect="/">
							<StatisticsPage />
						// </PrivateRoute>
					}
				/>

				<Route path="*" element={<AuthLogin />} />
			</Route>
		</Routes>
	);
};
