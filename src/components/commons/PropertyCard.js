import React from 'react';

const PropertyCard = ({ count, title, icon }) => {
  return (
    <div className="flex items-center justify-center w-full h-24 bg-white shadow-md rounded-lg p-4 m-2">
      <div className="flex items-center justify-space-between">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg">
          {icon}
        </div>
        <div className="ml-4">
          <div className="text-2xl font-bold text-gray-900">{count}</div>
          <div className="text-sm text-gray-600">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
