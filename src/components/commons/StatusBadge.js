import React from 'react';

const StatusBadge = ({ status }) => {
    const statusStyles = {
        Pending: 'bg-spale_sunshine text-white',
        Accepted: 'bg-green-500 text-white',
        Declined: 'bg-red-500 text-white',
        Validated: 'bg-green-500 text-white', 
        OnHold: 'bg-light_yellow text-white',   
        Live: 'bg-light_green text-black rounded-3xl',   
        GoLive: 'bg-customYellow text-black rounded-3xl',   
        Won: 'bg-green-500 text-white rounded',   
        Lost: 'bg-red-500 text-white rounded',   
    };

    return (
        <span className={`py-1 px-3 rounded ${statusStyles[status]}`}>
            {status=='GoLive'?'Go Live':status}
        </span>
    );
};

export default StatusBadge;