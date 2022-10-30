import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

const HomePage = lazy(() => import("./components/Home"));
const GamesPage = lazy(() => import("./components/GamePage"));
const AdminsPage = lazy(() => import("./components/AdminPage"));

const AppRoutes = () => (
  <div>
    APP-ROUTES
    <Suspense fallback="loading...">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gamepage" element={<GamesPage />} />
        <Route path="/adminpage" element={<AdminsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </div>
);

export default AppRoutes;
