import React from 'react';

const TypeBadge = ({ type }) => {
    const typeStyles = {
        ForSale: 'bg-gray-800 text-white',
        // Add more types if needed
    };

    return (
        <span className={`py-1 px-3 rounded ${typeStyles[type]}`}>
            {type}
        </span>
    );
};

export default TypeBadge;