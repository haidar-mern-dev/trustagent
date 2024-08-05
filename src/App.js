import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup";
import Otp from "./pages/otp";
import OnBoard from "./pages/onboard";
import DashboardPage from "./pages/dashboard";
import ListingDetails from "./components/AgentFlow/ListingDetails";
import Bidding from "./components/AgentFlow/Bidding";
import ChatSupport from "./components/AgentFlow/ChatSupport";
import BiddingPreview from "./components/AgentFlow/BiddingPreview";
import FAQS from "./components/AgentFlow/FAQS";
import AgentProfile from "./components/AgentFlow/AgentProfile";
import AgencyProfile from "./components/AgentFlow/AgencyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/listing-details" element={<ListingDetails />} />
        <Route path="/bidding-submission" element={<Bidding />} />
        <Route path="/bidding-preview" element={<BiddingPreview />} />
        <Route path="/help-chat" element={<ChatSupport />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/agent-profile" element={<AgentProfile />} />
        <Route path="/agency-profile" element={<AgencyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
