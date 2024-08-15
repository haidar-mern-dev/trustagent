import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { notification, Button } from 'antd';
import { compareBidsById } from '../../redux/propertiesSlice';
import AgencyLogo from '../../assets/images/agent.png';

const ProposalCard = ({ agent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleCardClick = (id) => {
    navigate(`/bidding-details/${id}`);
  };

  const handleCompareClick = async (id) => {
    setLoading(true);
    const result = await dispatch(compareBidsById(id));
    setLoading(false);

    if (result.meta.requestStatus === 'fulfilled') {
      notification.success({
        message: 'Comparison Successful',
        description: 'The bid has been successfully added to the comparison list.',
      });
    } else {
      notification.error({
        message: 'Comparison Failed',
        description: result.payload || 'Failed to compare the bids due to an unknown error.',
      });
    }
  };

  const isValidImageUrl = (url) => {
    return url && url.startsWith('http') ? url : AgencyLogo;
  };

  return (
    <div className="bg-white flex justify-between items-center p-6 border rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          <img 
            src={isValidImageUrl(agent.image)} 
            alt="Agent" 
            className="w-full h-full rounded-full" 
            onError={(e) => { e.target.onerror = null; e.target.src = AgencyLogo; }} 
          />
        </div>
        <div>
          <h3 className="font-semibold text-base">{agent.name}</h3>
          <p className="text-sm font-normal text-gray-500">{agent.agency}</p>
        </div>
        <div className="font-semibold text-sm ml-8">
          {agent.commission}% <span className='font-medium text-xs'>Commission</span>
        </div>
      </div>
      <div className="flex items-center">
        <button 
       
          onClick={() => handleCompareClick(agent.id)} 
          className="border border-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md mr-2"
        >
          
          Add to Comparison
        </button>
        <button onClick={() => handleCardClick(agent.id)} className="bg-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md">
          View Proposal
        </button>
      </div>
    </div>
  );
};

export default ProposalCard;
