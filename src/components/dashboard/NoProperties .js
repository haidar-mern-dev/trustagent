import React from 'react';
import AddProperyImage from '../../assets/images/addproperty.png'
const NoProperties = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white shadow-md rounded-md">
        <div className="text-3xl flex items-center space-x-4">
          <p className='font-medium	text-4xl'>0</p>
          <p className='font-medium	text-base '>Properties Added</p>
        </div>
        
        <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap	">Add Property</button>
      </div>
      <div className="relative w-full">
        <img src={AddProperyImage} alt="Real Estate" className="w-full h-64 object-cover rounded-md" />
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center">
          <h1 className="text-4xl font-bold max-w-2xl leading-relaxed">LET REAL ESTATE AGENTS BID FOR YOUR BUSINESS</h1>
          <button className="mt-4 px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md">Add a Property</button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white shadow-md rounded-md">
        <div className="text-3xl flex items-center space-x-4">
          <p className='font-medium	text-4xl'>0</p>
          <p className='font-medium	text-base '>Bids Started</p>
        </div>
        
        <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md">Add Property</button>
      </div>
    </div>
  );
};

export default NoProperties;
