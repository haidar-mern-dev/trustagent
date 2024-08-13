import React, { useEffect, useState } from 'react';
import NoProperties from '../../components/dashboard/NoProperties ';
import PropertiesAdded from '../../components/dashboard/PropertiesAdded';
import Layout from "../../components/layout";
import MultipleProperties from '../../components/dashboard/MultipleProperties';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBidsByPropertyId, fetchProperties, fetchPropertyCount } from '../../redux/propertiesSlice';
import { Spin } from "antd";

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
    dispatch(fetchBidsByPropertyId());
    dispatch(fetchPropertyCount());
  }, [dispatch]);
 
  const { items,bids,propertyCount, status, error, loading } = useSelector((state) => state.properties);
  const [view, setView] = useState(4);
  return (
    <Layout>
      {loading  && (
        <div className="h-screen w-full flex items-center justify-center bg-white z-50">
          <Spin size="large" style={{ color: 'rgba(255, 191, 0, 1)' }} />
        </div>
      )}
      {!loading && (
        <>
          {view === 1 && <NoProperties />}
          {view === 2 && <PropertiesAdded />}
          {/* {view === 3 && <PropertiesScheduled />} */}
          {view === 4 && <MultipleProperties data={items.data} bids={bids?.data} loading={loading} propertyCount={propertyCount?.data}/>}
        </>
      )}
    </Layout>
  );
};

export default DashboardPage;
