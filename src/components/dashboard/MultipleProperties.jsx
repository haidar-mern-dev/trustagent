import React, { useEffect } from "react";
import PropertImage from "../../assets/images/property.png";
import StatusBadge from "../commons/StatusBadge";
import TypeBadge from "../commons/TypeBadge";
import Table from "../../components/commons/Table";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from "antd";

const MultipleProperties = ({data,bids,loading,propertyCount}) => {
  const dispatch = useDispatch();
console.log(bids)
  const navigate=useNavigate()
  const headersproperty = ["Address", "Status", "Actions"];
  const headersProperty = ["Address", "Bids", "End Date","Actions"];
  const headerBids = ["Address", "Agency", "Commission","Total Estimate Cost","Free Value","Actions"];

  
 

  const dataproperty =data?.map(property => {
    const fullAddress = `${property.address.street}, ${property.address.city}, ${property.address.state} ${property.address.zipCode}, ${property.address.country}`;
  
    return [
      <span onClick={() => navigate(`/property-details/${property._id}`)} className="cursor-pointer">{fullAddress}</span>,
      <StatusBadge status={property.status} />, 
      <button onClick={() => navigate(`/property-details/${property._id}`,{ state: { viewPage: 2 } })} className="py-1 px-3 text-custom_gray font-bold bg-spale_sunshine rounded">
        Edit
      </button>,
    ];
  });
    
  return (
    <div className="flex flex-col items-center space-y-4">
    {loading?<Spin/>:<>
      <div className="bg-white  rounded-md w-full">
        <div className="flex items-center justify-center space-x-5 lg:space-x-28  p-4  mt-4 mb-2">
          <div className="text-3xl flex items-center space-x-4">
            <p className="font-medium	text-4xl">{propertyCount}</p>
            <p className="font-medium	text-base ">Properties Added</p>
          </div>

          <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap	">
            Add Property
          </button>
        </div>
        <div className="w-full p-4 bg-white  rounded-md overflow-x-auto border-t">
          <Table
            headers={headersproperty}
            data={dataproperty}
            isDashboard={true}
          />
        </div>
      </div>

         {bids?.length > 0 &&bids?.map((property) => {
        const propertyBids = property?.bids;
       
        return (
          <div key={property._id} className="bg-white rounded-md w-full mb-4">
            <div className="w-full p-4 bg-white rounded-md overflow-x-auto border-b">
              <Table
                headers={headersProperty}
                data={[[
                  property?.address ? `${property?.address.street}, ${property?.address.city}` : "Address Missing",
                  property?.bids ? property?.bids.length : "0",
                  property?.endDate || "N/A",
                  <button onClick={() => navigate(`/property-details/${property._id}`, { state: { viewPage: 1 } })} className="py-1 px-3 text-custom_gray font-bold bg-spale_sunshine rounded">
                    View All
                  </button>,
                ]]}
                isDashboard={true}
              />
            </div>
          
            {propertyBids?.length > 0 ? (
              <div className="w-full p-4 bg-white rounded-md overflow-x-auto border-b">
                <Table
                  headers={headerBids}
                  data={propertyBids.map(bid => [
                    bid.agency?.name || "Unknown",
                    bid.agency?.address || "Unknown",
                    bid.amount ? `$${bid.amount}` : "N/A",
                    bid.amount ? `$${bid.amount}` : "N/A",
                    bid.amount ? `$${bid.amount}` : "N/A",
                    <button onClick={() => navigate(`/bidding-details/${bid._id}`)} className="py-1 px-3 text-custom_gray font-bold bg-spale_sunshine rounded">
                      View Bid
                    </button>,
                  ])}
                  isDashboard={true}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white shadow-md rounded-md">
                <div className="text-3xl flex items-center space-x-4">
                  <p className='font-medium text-4xl'>0</p>
                  <p className='font-medium text-base'>Bids Started</p>
                </div>
                <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap uppercase">
                  Schedule Listing
                </button>
              </div>
            )}
          </div>
        );
      })}
    </>}
    </div>
  );
};

export default MultipleProperties;
