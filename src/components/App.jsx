import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { AuthLogin } from "../pages/AuthLogi";
import { LibraryPage } from "../pages/LibraryPage";
import { TrainingPage } from "../pages/TrainingPage";
import { StatisticsPage } from "../pages/StatisticsPage";
import { AuthRegistration } from '../pages/AuthRegistration';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegistration />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />

        <Route path="*" element={<AuthLogin />} />
      </Route>
    </Routes>
  );
};
