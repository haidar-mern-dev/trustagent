import React from 'react';

const UserProfile = ({setView}) => {
  return (
    <div className="bg-gray-100  flex justify-center items-center">
      <div className="w-full   space-y-4">
        
        <div className="bg-white border rounded p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Personal Details</h2>
            <button onClick={() => setView(1)} className="text-custom_gray font-medium	tex-lg border border-spale_sunshine rounded px-3 py-1 ">Update</button>
          </div>
          <div className="mt-2">
            <p className="text-sm"><span className="font-semibold">Name:</span> Deven</p>
            <p className="text-sm"><span className="font-semibold">Email:</span> deven@gmail.com</p>
          </div>
        </div>
        
        <div className=" bg-white border rounded p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Preferences</h2>
          </div>
          <div className="mt-2 flex items-center justify-between">
          <h2 className="text-lg font-medium">Password</h2>
            <button onClick={() => setView(2)} className="text-custom_gray font-medium	tex-lg border border-spale_sunshine rounded px-3 py-1 ">Update Password</button>
          </div>
        </div>

        <div className="bg-white border rounded p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">Manage Notifications</h2>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm mr-2">Get notifications to find out what's going on when you're online.</p>
            <div className="relative inline-block w-10 align-middle select-none">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
