import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";

import Layouts from "./components/layouts/Layouts";
import HomePage from "./components/pages/HomePage";
import MemerizePage from "./components/pages/MemerizePage";
import MemeriesPicPage from "./components/pages/MemeriesPicPage";
import CalendarPage from "./components/pages/CalendarPage";
import PuzzlePage from "./components/pages/PuzzlePage";
import LetterPage from "./components/pages/LetterPage";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<HomePage />} />
          <Route path="memerize" element={<MemerizePage />} />
          <Route path="memeries" element={<MemeriesPicPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="puzzle" element={<PuzzlePage />} />
          <Route path="letter" element={<LetterPage />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
