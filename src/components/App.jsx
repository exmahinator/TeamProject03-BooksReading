import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { AuthPage } from "../pages/AuthPage";
import { LibraryPage } from "../pages/LibraryPage";
import { TrainingPage } from "../pages/TrainingPage";
import { StatisticsPage } from "../pages/StatisticsPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />

        <Route path="*" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
