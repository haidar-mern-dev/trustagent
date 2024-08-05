import React, { useState } from 'react';
import Layout from '../../components/layout';
import Table from '../../components/commons/Table';
import StatusBadge from '../../components/commons/StatusBadge';
import PropertyCard from '../../components/commons/PropertyCard';
import Svgs from '../../assets/svgs';
import TypeBadge from '../../components/commons/TypeBadge';
import Pagination from '../../components/commons/Pagination';
import Breadcrumb from '../../components/commons/Breadcrumb';

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 
  const headers = ['#', 'Address', 'Validated Ownership', 'Type', 'Status', 'Action'];
const data = [
    [
        '1',
        '24 King St, Sydney, NSW 2000, Australia',
        <StatusBadge status="Validated" />,
        <TypeBadge type="ForSale" />,
        <StatusBadge status="OnHold" />,
        <>
            <button className="py-1 px-3 mr-2 text-custom_gray border border-spale_sunshine rounded">Edit</button>
            <button className="py-1 px-3 text-custom_gray bg-spale_sunshine rounded">View</button>
        </>
    ],
    // Add more rows as needed
];
  const headersBids = ['#', 'Agency Name', 'Agent Name', 'Property Address', 'Price Estimate', 'Agreement Type', 'Status'];
  const dataBids = [
    ['1', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Pending" />],
    ['2', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Accepted" />],
    ['3', 'AB Agency', 'Deven', '24 King St, Sydney, NSW 2000, Australia', '$10000', 'Exclusive', <StatusBadge status="Declined" />],
  ];

  const cardData = [
    { count: '01', title: 'Total Properties', icon: <Svgs.TotalProperties/> },
    { count: '10', title: 'Total Bids', icon: <Svgs.TotalBids/> },
    { count: '02', title: 'Pending Responses', icon: <Svgs.TotalResponses/> },
    { count: '06', title: 'Comparing Bids', icon: <Svgs.ComparingBids/>},
  ];
  const items = [
    { label: 'Listings', href: '/listings' },
    { label: 'Detail', href: '/listings/detail' },
  ];
  return (
    <Layout>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <PropertyCard key={index} count={card.count} title={card.title} icon={card.icon} />
          ))}
        </div>
      <div className='bg-white p-4 rounded mt-8'>
      
        <h1 className="text-2xl font-semibold mb-4">Bids Received</h1>
        <div className="overflow-x-auto">
          <Table headers={headersBids} data={dataBids} />
        </div>
      </div>
      <div className='flex flex-col items-end ml-4 mt-6'>
      <button className="bg-spale_sunshine text-custom_gray font-semibold	 py-2 px-4 rounded  ">
      Add Property
    </button>
      </div>
      <div className='bg-white p-4 rounded mt-6'>
      <div className="overflow-x-auto">
        <Table headers={headers} data={data} />
      </div>
    </div>
    <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
    </Layout>
  );
};

export default DashboardPage;
