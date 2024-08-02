import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup";
import Otp from "./pages/otp";
import OnBoard from "./pages/onboard";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
