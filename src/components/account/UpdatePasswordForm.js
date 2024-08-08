import React from 'react';

const UpdatePasswordForm = () => {
  return (
    <div className='-ml-5 w-full flex flex-col gap-6'>
       <p className="font-sans font-medium text-base text-[#202020]">
          Password
        </p>
        <p className="font-sans font-normal text-[14px] text-[#202020] -mt-1">
          Password
        </p>
      <div className=" md:w-[55%] w-[90%] h-auto rounded-[4px] border border-[#E4E3E4] bg-white flex md:items-start items-center justify-center py-5">
      <div className="p-4 w-full">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <div className="space-y-4 w-2/6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>
          <button className="bg-spale_sunshine text-custom_gray rounded px-4 py-2 ">Save</button>
      </div>
    </div>
    </div>
  );
};

export default UpdatePasswordForm;
