import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import { Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
