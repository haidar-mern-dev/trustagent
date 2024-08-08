import React from 'react';

const PropertyCard = ({ count, title, icon }) => {
  return (
    <div className="flex items-center justify-between w-full h-24 bg-white shadow-md rounded-lg p-4 mt-2 ">
      <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
        {icon}
      </div>
      <div className="flex flex-col items-end ml-4">
        <div className="text-2xl font-medium font-bold text-gray-900">{count}</div>
        <div className="text-sm font-medium	 text-gray-600">{title}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
