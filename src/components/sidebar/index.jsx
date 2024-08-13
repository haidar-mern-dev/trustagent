import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Svgs from '../../assets/svgs';

const navLinksCustomer = [
  // { to: "/property-details", icon: <Svgs.PropertyIcon />, label: "My Property" },
  { to: "/bidding-details", icon: <Svgs.BiddingIcon />, label: "Bidding" },
  { to: "/help-chat", icon: <Svgs.HelpIcon />, label: "Help" },
  { 
    to: "/account-management", 
    icon: <Svgs.SettingIcon />, 
    label: "My Account",

  },
];

const navLinksAgent = [
  { to: "/prospects-details", icon: <Svgs.PropertyIcon />, label: "Prospects" },
  { to: "/view-bids", icon: <Svgs.BiddingIcon />, label: "View Bids" },
  { to: "/help-chat", icon: <Svgs.HelpIcon />, label: "Help" },
  { 
    to: "/account-management", 
    icon: <Svgs.SettingIcon />, 
    label: "Account Management",
    children: [
      { to: "/account-management/agentprofile", label: "Agent Profile" },
      { to: "/account-management/agencyprofile", label: "Agency Profile" },
      { to: "/account-management/security", label: "Password" }
    ]
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen, isCustomerView }) => {
  const navLinks = isCustomerView ? navLinksCustomer : navLinksAgent;
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      className={`absolute left-0 top-0 z-40 flex h-screen w-72 flex-col overflow-y-hidden bg-custom_gray duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center text-white font-bold justify-between gap-2 px-6 py-5 lg:py-4">
        <NavLink to="/dashboard">
          Logo
        </NavLink>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="space-y-3 p-4">
        {navLinks.map((link, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `group flex items-center text-white hover:bg-gray-700 rounded transition-colors duration-300 p-2 w-full text-left ${
                    isActive ? 'bg-soft_gold' : ''
                  }`
                }
                onClick={(e) => {
                  if (link.children) {
                    e.preventDefault();
                    handleToggle(index);
                  }
                }}
              >
                {({ isActive }) => (
                  <>
                    <span className={`p-2 rounded mr-2 transition-colors duration-300 ${isActive ? 'bg-spale_sunshine' : 'bg-steel_blue'}`}>
                      {React.cloneElement(link.icon, { className: "group-hover:text-new_icon_color transition-colors duration-300" })}
                    </span>
                    <span className="group-hover:text-new_span_color font-medium text-sm transition-colors duration-300">
                      {link.label}
                    </span>
                    {link.children && (
                      <span className={`transition-transform duration-300 ml-1 ${openIndex === index ? 'rotate-180' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10.4417 13.5666C10.3245 13.6837 10.1657 13.7494 10 13.7494C9.83441 13.7494 9.67556 13.6837 9.55837 13.5666L3.30837 7.31663C3.19797 7.19815 3.13787 7.04145 3.14072 6.87953C3.14358 6.71761 3.20917 6.56312 3.32368 6.44861C3.43819 6.3341 3.59268 6.26851 3.7546 6.26565C3.91652 6.2628 4.07322 6.3229 4.1917 6.4333L10 12.2416L15.8084 6.4333C15.8656 6.37189 15.9346 6.32264 16.0113 6.28848C16.0879 6.25432 16.1707 6.23595 16.2546 6.23447C16.3385 6.23299 16.4219 6.24843 16.4997 6.27986C16.5775 6.3113 16.6482 6.35808 16.7076 6.41743C16.7669 6.47678 16.8137 6.54748 16.8451 6.6253C16.8766 6.70312 16.892 6.78648 16.8905 6.8704C16.889 6.95432 16.8707 7.03708 16.8365 7.11375C16.8024 7.19041 16.7531 7.25941 16.6917 7.31663L10.4417 13.5666Z" fill="white"/>
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            </div>
            {link.children && openIndex === index && (
              <div className="bg-steel_blue px-4 rounded  space-y-1">
                {link.children.map((child, childIndex) => (
                  <NavLink
                    key={childIndex}
                    to={child.to}
                    className={({ isActive }) =>
                      `block text-white hover:bg-gray-600 rounded transition-colors duration-300 p-2 w-full text-left ${
                        isActive ? 'bg-soft_gold' : ''
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
