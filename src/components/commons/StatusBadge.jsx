import React from 'react';

const StatusBadge = ({ status }) => {
    const statusStyles = {
        Pending: 'bg-spale_sunshine text-custom_gray font-bold',
        Accepted: 'bg-green-500 text-custom_gray font-bold',
        Declined: 'bg-red-500 text-custom_gray font-bold',
        Validated: 'bg-green-500 text-custom_gray font-bold', 
        OnHold: 'bg-light_yellow text-custom_gray font-bold',   
        Live: 'bg-light_green text-custom_gray font-bold rounded-3xl',   
        GoLive: 'bg-customYellow text-custom_gray font-bold rounded-3xl',   
        Won: 'bg-green-500 text-custom_gray font-bold rounded',   
        Lost: 'bg-red-500 text-custom_gray font-bold rounded',   
    };

    return (
        <span className={`py-1 px-3 rounded ${statusStyles[status]?statusStyles[status]:'bg-spale_sunshine text-custom_gray font-bold'}`}>
            {status=='GoLive'?'Go Live':status}
        </span>
    );
};

export default StatusBadge;