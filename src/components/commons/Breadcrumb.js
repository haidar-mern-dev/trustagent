import React from "react";
import Svgs from "../../assets/svgs";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex px-1 py-3 text-gray-700" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <div className="flex items-center">
             <Svgs.RightArrow/>
              </div>
            )}
            {item.url ? (
              <a href={item.url} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                {item.label}
              </a>
            ) : (
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
