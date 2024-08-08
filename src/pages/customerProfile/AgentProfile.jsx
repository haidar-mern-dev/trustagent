import React from 'react'
import AgentProfile from '../../components/bidding/AgentDetails'
import Layout from '../../components/layout';
import Breadcrumb from '../../components/commons/Breadcrumb';

export default function CustomerAgentProfilePage() {
  const breadcrumbItems = [
    { label: "Home", url: "/" },
    { label: "Shortlisted Agents", url: "/bidding-details" },
    { label: "Agent Details" }
  ];
  return (
    <Layout>
      <div className='mb-4'>
        <Breadcrumb items={breadcrumbItems} />  
      </div>

        <AgentProfile/>
    </Layout>
  )
}
