import React from 'react';
import Layout from '../../components/layout';
import AgentImage from '../../assets/images/agent.png'
import Svgs from '../../assets/svgs';
import ProposalCard from '../../components/bidding/ProposalCard';
const agents = [
  { name: 'Agent Name', agency: 'Agency Name', commission: 30, image: AgentImage },
  { name: 'Agent Name', agency: 'Agency Name', commission: 30, image: AgentImage},
  { name: 'Agent Name', agency: 'Agency Name', commission: 30, image: AgentImage }
];

const BiddingPage = () => {
  return (
    <Layout>
      <div className='flex justify-between'>
      <div className='font-semibold	tex-base flex items-center'>Biding</div>
        <div className='flex space-x-4'>
        <button className="bg-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md">View Shortlisted Agents</button>
        <button><Svgs.AddProperty/></button>
        </div>
      </div>
      <div className="space-y-1 flex flex-col mt-4">
        <span className="font-medium text-xs">
          24 King St, Sydney, NSW 2000, Australia
        </span>
        <span className="font-normal	font-medium text-xs">
          Found 3 agents matches to your property location.
        </span>
      </div>
      <div className="space-y-4 mt-4">
        {agents.map((agent, index) => (
          <ProposalCard key={index} agent={agent} />
        ))}
      </div>
    </Layout>
  );
};

export default BiddingPage;
