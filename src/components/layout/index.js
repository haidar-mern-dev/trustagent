import React from 'react';
import Sidebar from '../sidebar';
import Header from '../header';


const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
