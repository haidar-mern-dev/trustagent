import React, { useState } from "react";
import Layout from "../../components/layout";
import ChatSupport from "../../components/AgentFlow/ChatSupport";
import FAQ from "../../components/AgentFlow/Faq";

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('Help');

  const renderContent = () => {
    if (activeTab === 'Help') {
      return <ChatSupport />;
    } else if (activeTab === 'FAQs') {
      return <FAQ />;
    }
  };

  return (
    <Layout>
      <div className="font-semibold text-base">Help</div>
      <div className="flex items-center space-x-4 p-4 bg-gray-100">
        <button
          className={`text-base ${activeTab === 'Help' ? 'text-gray-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Help')}
        >
          Help
        </button>
        <span className="text-gray-300">|</span>
        <button
          className={`text-base ${activeTab === 'FAQs' ? 'text-gray-700' : 'text-gray-500'}`}
          onClick={() => setActiveTab('FAQs')}
        >
          FAQs
        </button>
      </div>
      {renderContent()}
    </Layout>
  );
}
