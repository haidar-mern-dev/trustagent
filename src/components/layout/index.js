import React, { useState, ReactNode } from 'react';
import Sidebar from '../sidebar';
import HeaderComponent from '../header';


const DefaultLayout= ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-100">
 
      <div className="flex h-screen overflow-hidden">

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isCustomerView={true} />
    
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

          <HeaderComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          <div className='bg-white shadow-header-custom  w-full flex items-center justify-center p-4 mt-auto text-xs '>
            2024 © TrustAgent
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DefaultLayout;
