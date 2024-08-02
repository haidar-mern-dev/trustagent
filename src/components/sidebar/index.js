import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-custom_gray h-screen p-4">
      <div className="text-white text-lg font-bold mb-6">LOGO</div>
      <div className="space-y-4">
        <NavLink to="/dashboard" activeClassName="bg-yellow-600" className="flex items-center text-white hover:bg-gray-700 rounded p-2 w-full text-left">
          <span className="material-icons mr-2">dashboard</span>
          Dashboard
        </NavLink>
        <NavLink to="/property" activeClassName="bg-yellow-600" className="flex items-center text-white hover:bg-gray-700 rounded p-2 w-full text-left">
          <span className="material-icons mr-2">domain</span>
          My Property
        </NavLink>
        <NavLink to="/bidding" activeClassName="bg-yellow-600" className="flex items-center text-white hover:bg-gray-700 rounded p-2 w-full text-left">
          <span className="material-icons mr-2">gavel</span>
          Bidding
        </NavLink>
        <NavLink to="/help" activeClassName="bg-yellow-600" className="flex items-center text-white hover:bg-gray-700 rounded p-2 w-full text-left">
          <span className="material-icons mr-2">help_outline</span>
          Help
        </NavLink>
        <NavLink to="/account" activeClassName="bg-yellow-600" className="flex items-center text-white hover:bg-gray-700 rounded p-2 w-full text-left">
          <span className="material-icons mr-2">settings</span>
          Account Management
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
