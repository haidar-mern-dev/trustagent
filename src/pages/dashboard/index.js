import React from 'react';
import Layout from '../../components/layout';
import Table from '../../components/commons/Table';
import StatusBadge from '../../components/commons/StatusBadge';
import PropertyCard from '../../components/commons/PropertyCard';
import Svgs from '../../assets/svgs';

const DashboardPage = () => {
  const headers = ['#', 'Agency Name', 'Agent Name', 'Property Address', 'Price Estimate', 'Agreement Type', 'Status'];
  const data = [
    ['1', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Pending" />],
    ['2', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Accepted" />],
    ['3', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Declined" />],
  ];

  const cardData = [
    { count: '01', title: 'Total Properties', icon: <Svgs.TotalProperties/> },
    { count: '10', title: 'Total Bids', icon: <Svgs.TotalProperties/> },
    { count: '02', title: 'Pending Responses', icon: <Svgs.TotalProperties/> },
    { count: '06', title: 'Comparing Bids', icon: <Svgs.TotalProperties/>},
  ];

  return (
    <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <PropertyCard key={index} count={card.count} title={card.title} icon={card.icon} />
          ))}
        </div>
      <div className='bg-white p-4 rounded'>
      
        <h1 className="text-2xl font-semibold mb-4">Bids Received</h1>
        <div className="overflow-x-auto">
          <Table headers={headers} data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
