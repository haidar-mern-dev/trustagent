import React from "react";
import { useNavigate } from "react-router-dom";

const ProposalDetailCard = ({ agent }) => {
  const navigate=useNavigate()
  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <div className=" flex justify-between items-center ">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={agent?.image}
              alt="Agent"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base	">{agent?.name}</h3>
            <p className="text-sm font-normal		 text-gray-500">{agent?.agency}</p>
          </div>
          <button onClick={() => navigate(`/agent-profile`)} className="border border-spale_sunshine font-semibold text-sm	 text-custom_gray py-2 px-4 rounded-md mr-2">
            View Profile
          </button>
          <div className="font-semibold text-sm	">
            {agent?.commission}%{" "}
            <span className="font-medium text-sm	"> Commission</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="border border-spale_sunshine font-semibold text-sm	 text-custom_gray py-2 px-4 rounded-md mr-2">
            Reject
          </button>
          <button className="bg-spale_sunshine font-semibold text-sm	 text-custom_gray py-2 px-4 rounded-md">
            Accept
          </button>
        </div>
      </div>
      <div className="mb-4 space-y-4 mt-8">
        <p className="text-sm">
          <span className="font-medium	text-base	">Agreement Type:</span> <span className="font-normal	text-sm	 text-gray-500">{agent?.agreementType}</span>
        </p>
        <p className="text-sm">
          <span className="font-medium	text-base	">Sales Method:</span> <span className="font-normal	text-sm	 text-gray-500">{agent?.salesMethod}</span>
        </p>
        <p className="text-sm">
          <span className="font-medium	text-base	">Price Estimate:</span> <span className="font-normal	text-sm	 text-gray-500">{agent?.priceEstimate}</span>
        </p>
        <p className="text-sm">
          <span className="font-medium	text-base	">Property Selling Cost:</span> <span className="font-normal	text-sm	 text-gray-500">{agent?.sellingCost}</span>
        </p>
        <p className="text-sm">
          <span className="font-medium	text-base	">Description:</span> <span className="font-normal	text-sm	 text-gray-500">{agent?.description}</span>
        </p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-sm mb-2">Free Inclusions:</h4>
        <div className="flex flex-wrap">
          {agent?.freeInclusions.map((inclusion, index) => (
            <div
              key={index}
              className="bg-custom_light_gray text-custom_dark_gray text-sm	 font-medium py-2 px-3 rounded-3xl mr-2 mb-2"
            >
              {inclusion}
            </div>
          ))}
        </div>
      </div>
 
    </div>
  );
};

export default ProposalDetailCard;
