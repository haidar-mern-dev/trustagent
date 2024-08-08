import React from 'react';
import ProposalDetailCard from '../../components/bidding/ProposalDetails';
import Layout from '../../components/layout';
import AgentImage from '../../assets/images/agent.png'
import Breadcrumb from '../../components/commons/Breadcrumb';



const AgentDetail = () => {
  const agent = {
    image: AgentImage,
    name: 'Agent Name',
    agency: 'Agency Name',
    commission: 30,
    agreementType: 'Exclusive',
    salesMethod: 'Private',
    priceEstimate: '$15,000,000 to $19,000,000',
    sellingCost: '$15,000,000 to $19,000,000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    freeInclusions: ['Web Listing Fees', 'Signboards', 'Photography', 'Pamphlets']
  };
  const breadcrumbItems = [
    { label: "Bidding", url: "/bidding-details" },
    { label: "Proposal Details", },

  ];
  return (
    <Layout>
      <div className='font-semibold	tex-base'>Biding</div>
        <Breadcrumb items={breadcrumbItems} />  
      <div className="space-y-1 flex flex-col mt-1 mb-4">
        <span className="font-medium text-xs">
          24 King St, Sydney, NSW 2000, Australia
        </span>
       
      </div>
     <ProposalDetailCard agent={agent} />
    </Layout>
  );
};

export default AgentDetail;
