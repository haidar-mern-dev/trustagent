
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Svgs from '../../assets/svgs';


const navLinks = [
  { to: "/dashboard", icon: <Svgs.DashboardIcon />, label: "Dashboard" },
  { to: "/property-details", icon: <Svgs.PropertyIcon />, label: "My Property" },
  { to: "/bidding-details", icon: <Svgs.BiddingIcon />, label: "Bidding" },
  { to: "/help-chat", icon: <Svgs.HelpIcon />, label: "Help" },
  { to: "/account-management", icon: <Svgs.SettingIcon />, label: "Account Management" },
];
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-40 flex h-screen w-72.5 flex-col overflow-y-hidden bg-custom_gray duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center text-white font-bold justify-between gap-2 px-6 py-5 lg:py-4">
        <NavLink to="/">
          Logo
        </NavLink>

        
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="space-y-3 p-4">
         {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              `group flex items-center text-white hover:bg-gray-700 rounded transition-colors duration-300 p-2 w-full text-left ${
                isActive ? 'bg-soft_gold' : ''
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`p-2 rounded mr-2 transition-colors duration-300 ${isActive ? 'bg-spale_sunshine' : 'bg-steel_blue'}`}>
                  {React.cloneElement(link.icon, { className: "group-hover:text-new_icon_color transition-colors duration-300" })}
                </span>
                <span className="group-hover:text-new_span_color font-medium text-sm transition-colors duration-300">
                  {link.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
