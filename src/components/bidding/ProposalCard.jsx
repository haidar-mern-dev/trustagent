import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProposalCard = ({ agent }) => {
    const navigate = useNavigate();
    const handleCardClick = (id) => {
        navigate(`/bidding-details/${'32222'}`);
      };
  return (
    <div className="bg-white flex justify-between items-center p-6 border rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          <img src={agent.image} alt="Agent" className="w-full h-full rounded-full" />
        </div>
        <div>
          <h3 className="font-semibold text-base	">{agent.name}</h3>
          <p className="text-sm font-normal		 text-gray-500">{agent.agency}</p>
        </div>
        <div className="font-semibold text-sm	  ml-8">{agent.commission}% <span className='font-medium text-xs'> Commission</span></div>
      </div>
      <div className="flex items-center">
        
        <button className="border border-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md mr-2">Add to Comparison</button>
        <button onClick={() => handleCardClick('dddd')} className="bg-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md">View Proposal</button>
      </div>
    </div>
  );
};

export default ProposalCard;
