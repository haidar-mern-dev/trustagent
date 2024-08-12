import React from "react";
import { useNavigate } from "react-router-dom";

const ProposalDetailCard = ({ agent }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-6 border rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src={agent?.image}
              alt="Agent"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <h3 className="font-semibold text-base">{agent?.name}</h3>
            <p className="text-sm font-normal text-gray-500">{agent?.agency}</p>
          </div>
          <button
            onClick={() => navigate(`/agent-profile`)}
            className="border border-spale_sunshine font-semibold text-sm text-custom_gray py-2 px-4 rounded-md mr-2"
          >
            View Profile
          </button>
          <div className="font-semibold text-sm">
            {agent?.commission}%{" "}
            <span className="font-medium text-sm"> Commission</span>
          </div>
        </div>
        <div className="flex items-center">
          <button className="border border-spale_sunshine font-semibold text-sm text-custom_gray py-2 px-4 rounded-md mr-2">
            Reject
          </button>
          <button className="bg-spale_sunshine font-semibold text-sm text-custom_gray py-2 px-4 rounded-md">
            Accept
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Agency Name:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">Exclusive</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Rental Estimate:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$500 to $550 per week</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Management Fee:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">5%</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Letting Fee:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$789</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Lease Renewal Fees:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
      </div>
      <div className="mt-3 mb-3">
          <h4 className="font-bold text-base mb-2">Marketing Costs:</h4>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Admin Fees:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$25</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Photography:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$200</p>
        </div>
      </div>
     
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">RealEstate.com.au:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">
            $180 | Premium Listing (unlimited days) + eBrochure
          </p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Domain.com.au:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">
            $200 | Premium Listing (unlimited days) + eBrochure
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Other Websites:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$40 | Homely.com.au</p>
          <p className="text-sm font-normal text-gray-500">Nil | HomeHound.com.au</p>
        </div>
      
      </div>
      <div className="mt-3 mb-3">
          <h4 className="font-bold text-base mb-2">Administration Charges:</h4>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Tenancy Preparation Fee:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Property Condition Report:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Management Administration (per month):</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Preparation of Inventory List:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Routine Inspection (per inspection up to 3 max per year):</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$159</p>
        </div>
      
      </div>
      <div className="mt-3 mb-3">
          <h4 className="font-bold text-base mb-2">Tenancy Tribunal Charges:</h4>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Attendance at Tribunal:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$150 per hour</p>
        </div>
      
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Applying for Tribunal Order:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">At Cost</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Serving of Any Notices:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">At Cost</p>
        </div>
      </div>
      <div className="mt-3 mb-3">
          <h4 className="font-bold text-base mb-2">Other Charges:</h4>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Any Other Charges:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">$10 per month | Postage and Petties</p>
        </div>
        <div>
          <h4 className="font-medium text-base mb-2">Marketing Brochures (optional):</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">
            Landlord Brochure, Tenant Brochure, Property Management & Leasing Team Brochure
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div>
          <h4 className="font-medium text-base mb-2">Description:</h4>
        </div>
        <div>
          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
       
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-base mb-2">Free Inclusions:</h4>
        <div className="flex flex-wrap">
          {agent?.freeInclusions.map((inclusion, index) => (
            <div
              key={index}
              className="bg-custom_light_gray text-custom_dark_gray text-sm font-medium py-2 px-3 rounded-3xl mr-2 mb-2"
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
