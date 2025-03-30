import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import FraudDetecton from "./pages/FraudDetecton";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<p>Home</p>} />
        <Route path="/fraud-detection" element={<FraudDetecton />} />
      </Routes>
    </div>
  );
};

export default App;
