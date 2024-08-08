import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup";
import Otp from "./pages/otp";
import OnBoard from "./pages/onboard";
import ListingDetails from "./components/AgentFlow/ListingDetails";
import Bidding from "./components/AgentFlow/Bidding";
import ChatSupport from "./components/AgentFlow/ChatSupport";
import BiddingPreview from "./components/AgentFlow/BiddingPreview";
import FAQS from "./components/AgentFlow/FAQS";
import AgentProfile from "./components/AgentFlow/AgentProfile";
import AgencyProfile from "./components/AgentFlow/AgencyProfile";

import BiddingPage from "./pages/bidding";
import ProposalDetailCard from "./components/bidding/ProposalDetails";
import CustomerAgentProfilePage from './pages/customerProfile/AgentProfile'
import AgentDetail from "./pages/proposalDetail";
import HeplPage from "./pages/help";
import DashboardPage from "./pages/dashboard/DashboardPage";
import MyPropertyPage from "./pages/myproperty";
import AccountManagement from "./pages/account";
import HelpPage from "./pages/help";
import ProspectsPage from "./pages/dashboard/backupdesin";
import ViewBidsPage from "./pages/viewBids";
import AgencyProfilePage from "./pages/agencyProfile";
import AgentProfilePage from "./pages/agentProfile";
import AgentPasswordPage from "./pages/passwordPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/property-details" element={<MyPropertyPage />} />
        <Route path="/bidding-submission" element={<Bidding />} />
        <Route path="/bidding-preview" element={<BiddingPreview />} />
        <Route path="/help-chat" element={<HelpPage />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="/agent-profile" element={<AgentProfile />} />
        <Route path="/agency-profile" element={<AgencyProfile />} />
        <Route path="/help-chat" element={<HeplPage />} />
        <Route path="/bidding-details" element={<BiddingPage />} />
        <Route path="/bidding-details/:id" element={<AgentDetail />} />
        <Route path="/agent-profile" element={<CustomerAgentProfilePage />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/prospects-details" element={<ProspectsPage />} />
        <Route path="/view-bids" element={<ViewBidsPage />} />
        <Route path="/account-management/agencyprofile" element={<AgencyProfilePage />} />
        <Route path="/account-management/agentprofile" element={<AgentProfilePage />} />
        <Route path="/account-management/security" element={<AgentPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
