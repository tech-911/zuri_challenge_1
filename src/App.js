import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import "./app.scss"
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
