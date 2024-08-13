import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/index";
import ListingDetails from "../../components/AgentFlow/ListingDetails";
import Breadcrumb from "../../components/commons/Breadcrumb";
import EditProperty from "../../components/property/EditProperty";
import { fetchPropertyById } from "../../redux/propertiesSlice";
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from "react-router-dom";

const breadcrumbItems = [
  { label: "Dashboard", url: "/dashboard" },
  { label: "My Property", url: "" },
];
const breadcrumbItemsEditProperty = [
  { label: "My Property", url: "/property-details" },
  { label: "Detail"  ,url: "/property-details" },
  { label: "Edit Property"  },
];
export default function MyPropertyPage() {
  const { id } = useParams();
  const location = useLocation();
  const { viewPage } = location.state || {};
  const dispatch = useDispatch();
    const [view, setView] = useState(viewPage?viewPage: 1)
    useEffect(() => {
      dispatch(fetchPropertyById(id));
    }, [dispatch]);
    const { selectedProperty, status, error, loading } = useSelector((state) => state.properties);
  return (
    <Layout>
      <div className="font-semibold	tex-base">My Property</div>
      <div className="flex justify-between w-full">
      <div>  <Breadcrumb items={view=='2'?breadcrumbItemsEditProperty: breadcrumbItems} /></div>
        <div>
          {" "}
         {view=='1'&& <button onClick={() => setView(2)} className="py-1 px-3 text-text-custom_gray bg-spale_sunshine rounded ">
            Edit Details
          </button>}
        </div>
      </div>

      {view==1&& <ListingDetails data={selectedProperty?.data} />}
     {view==2&& <EditProperty/>}
    </Layout>
  );
}
