// StatusBadge.js
import React from 'react';

const StatusBadge = ({ status }) => {
    const statusStyles = {
        Pending: 'bg-yellow-500 text-white',
        Accepted: 'bg-green-500 text-white',
        Declined: 'bg-red-500 text-white',
    };

    return (
        <span className={`py-1 px-3 rounded ${statusStyles[status]}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
