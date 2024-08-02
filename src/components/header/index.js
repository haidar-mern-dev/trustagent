import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-200 p-4 flex justify-end">
      <button className="text-gray-600">
        <span className="material-icons">notifications</span>
      </button>
    </div>
  );
};

export default Header;
