import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import NavBar from './components/NavBar';

import Home from "./pages/Home";
import SelectedMovie from "./pages/SelectedMovie";
// import Auth from './pages/Auth';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SelectedMovie />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
