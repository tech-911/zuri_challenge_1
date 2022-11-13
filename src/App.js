import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./app.scss";
import PlaceToStay from "./pages/PlaceToStay/PlaceToStay";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
      </Routes>
    </div>
  );
};

export default App;
