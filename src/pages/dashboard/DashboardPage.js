import React, { useState } from 'react';
import NoProperties from '../../components/dashboard/NoProperties ';
import PropertiesAdded from '../../components/dashboard/PropertiesAdded';
import Layout from "../../components/layout";
import MultipleProperties from '../../components/dashboard/MultipleProperties';

const DashboardPage = () => {
  const [view, setView] = useState(4)
  return (
    <Layout>
      {view === 1 && <NoProperties />}
      {view === 2 && <PropertiesAdded />}
      {/* {view === 3 && <PropertiesScheduled />} */}
      {view === 4 && <MultipleProperties />}
    </Layout>
  );
};

export default DashboardPage;
