import React from 'react';
import PropertImage from '../../assets/images/property.png'
import StatusBadge from '../commons/StatusBadge';
import TypeBadge from '../commons/TypeBadge';
import Table from "../../components/commons/Table";

const PropertiesAdded = () => {
  const headers = [
    "Address",
   
    "Status",
    "Action",
  ];
  
  const data = [
    [
      "24 King St, Sydney, NSW 2000, Australia",
   
      <StatusBadge status="Live" />,
      <>
      
        <button className="py-1 px-3 text-custom_gray bg-spale_sunshine rounded">
          View
        </button>
      </>,
    ],
  ];
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className='bg-white shadow-md rounded-md w-full'>
      <div className="flex items-center justify-center space-x-5 lg:space-x-28  p-4  mt-4 mb-2">
        <div className="text-3xl flex items-center space-x-4">
          <p className='font-medium	text-4xl'>0</p>
          <p className='font-medium	text-base '>Properties Added</p>
        </div>
        
        <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap	">Add Property</button>
      </div>
      <div className="w-full p-4 bg-white shadow-md rounded-md overflow-x-auto border-t">
        <Table headers={headers} data={data} isDashboard={true}/>
      </div>
      </div>
     
      <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white shadow-md rounded-md">
        <div className="text-3xl flex items-center space-x-4">
          <p className='font-medium	text-4xl'>0</p>
          <p className='font-medium	text-base '>Bids Started</p>
        </div>
        
        <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap	">schedule listing</button>
      </div>
      <div className="relative w-full">
        <img src={PropertImage} alt="Real Estate" className="w-full h-64 object-cover rounded-md" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl font-bold max-w-2xl leading-relaxed">YOU ARE MOMENTS AWAY FROM HAVING AGENTS COMPETE FOR YOUR PROPERTY</h1>
          <button className="mt-4 px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap">Schedule Listing</button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesAdded;
