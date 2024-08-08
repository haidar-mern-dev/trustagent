import React, { useState } from "react";
import Layout from "../../components/layout/index";
import ListingDetails from "../../components/AgentFlow/ListingDetails";
import Breadcrumb from "../../components/commons/Breadcrumb";
import EditProperty from "../../components/property/EditProperty";
const breadcrumbItems = [
  { label: "My Property", url: "/property-details" },
  { label: "Detail" },
];
const breadcrumbItemsEditProperty = [
  { label: "My Property", url: "/property-details" },
  { label: "Detail"  ,url: "/property-details" },
  { label: "Edit Property"  },
];
export default function MyPropertyPage() {
    const [view, setView] = useState(1)
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

      {view==1&& <ListingDetails is />}
     {view==2&& <EditProperty/>}
    </Layout>
  );
}
