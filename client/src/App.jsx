import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductsPage from "./pages/Products";
import FraudDetecton from "./pages/FraudDetecton";
import LoanApproval from "./pages/LoanApproval";
import 'react-tooltip/dist/react-tooltip.css'

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/fraud-detection" element={<FraudDetecton />} />
        <Route path="/loan-approval" element={<LoanApproval />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
};

export default App;
