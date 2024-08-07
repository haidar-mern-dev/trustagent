import React from 'react';

const PersonalDetailsForm = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white border rounded p-4 w-full">
          <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>
          <button className="bg-spale_sunshine text-custom_gray rounded px-4 py-2 ">Save</button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
