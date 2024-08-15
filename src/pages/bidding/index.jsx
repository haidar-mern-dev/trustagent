import React from 'react';
import Layout from '../../components/layout';
import ProposalCard from '../../components/bidding/ProposalCard';
import { useSelector } from 'react-redux';
import Svgs from '../../assets/svgs';

const BiddingPage = () => {
  const { bids, status, error, loading } = useSelector((state) => state.properties);

  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='font-semibold tex-base flex items-center'>Bidding</div>
        <div className='flex space-x-4'>
          <button className="bg-spale_sunshine font-semibold text-xs text-custom_gray py-2 px-4 rounded-md">View Shortlisted Agents</button>
          <button><Svgs.AddProperty /></button>
        </div>
      </div>
      {bids?.data && bids?.data.map((property) => (
        console.log(property),
        property.bids.length > 0 && (
          <div key={property._id}>
            <div className="space-y-1 flex flex-col mt-4">
              <span className="font-medium text-xs">
                {`${property.address.street}, ${property.address.city}, ${property.address.state}, ${property.address.zipCode}, ${property.address.country}`}
              </span>
              <span className="font-normal font-medium text-xs">
                Found {property.bids.length} agent{property.bids.length > 1 ? 's' : ''} match{property.bids.length > 1 ? 'es' : ''} to your property location.
              </span>
            </div>
            <div className="space-y-4 mt-4">
              {property.bids.map((bid, index) => (
                <ProposalCard 
                  key={bid._id} 
                  agent={{
                    name: bid.agency.user.name, 
                    agency: bid.agency.name, 
                    commission: bid.amount, 
                    image: bid.agency.logo ,
                    id: bid.agency._id
                  }} 
                />
              ))}
            </div>
          </div>
        )
      ))}
    </Layout>
  );
};

export default BiddingPage;
