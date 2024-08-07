import React from "react";
import PropertImage from "../../assets/images/property.png";
import StatusBadge from "../commons/StatusBadge";
import TypeBadge from "../commons/TypeBadge";
import Table from "../../components/commons/Table";

const MultipleProperties = () => {
  const headersproperty = ["Address", "Status", "Actions"];
  const headerPropert1 = ["Address", "Bids", "End Date","Actions"];
  const headerAgent1 = ["Address", "Agency", "Commission","Total Estimate Cost","Free Value","Actions"];

  const dataAgent1 = [
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
    [
      "Deven",
      "XYZ",
      "30%",
      "$15,000,000",
      "xxx",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View BID
      </button>,
    ],
   
  ];
  const dataproperty1 = [
    [
      "24 King St, Sydney, NSW 2000, Australia",
      "10",
      "10/08/2024",
     
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View All
      </button>,
    ],
   
  ];
  const dataproperty = [
    [
      "24 King St, Sydney, NSW 2000, Australia",
      <StatusBadge status="Live" />,
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        Edit
      </button>,
    ],
    [
      "24 King St, Sydney, NSW 2000, Australia",
      <StatusBadge status="Live" />,
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        Edit
      </button>,
    ],
    [
      "24 King St, Sydney, NSW 2000, Australia",
      <StatusBadge status="GoLive" />,
      <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        Edit
      </button>,
    ],
  ];
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-white  rounded-md w-full">
        <div className="flex items-center justify-center space-x-5 lg:space-x-28  p-4  mt-4 mb-2">
          <div className="text-3xl flex items-center space-x-4">
            <p className="font-medium	text-4xl">0</p>
            <p className="font-medium	text-base ">Properties Added</p>
          </div>

          <button className="px-4 py-2 bg-spale_sunshine text-custom_gray font-semibold rounded-md whitespace-nowrap	">
            Add Property
          </button>
        </div>
        <div className="w-full p-4 bg-white  rounded-md overflow-x-auto border-t">
          <Table
            headers={headersproperty}
            data={dataproperty}
            isDashboard={true}
          />
        </div>
      </div>

      <div className="bg-white  rounded-md w-full">
        <div className="w-full p-4 bg-white  rounded-md overflow-x-auto border-b">
          <Table
            headers={headerPropert1}
            data={dataproperty1}
            isDashboard={true}
          />
        </div>
        <div>
          {" "}
          <Table
            headers={headerAgent1}
            data={dataAgent1}
            isDashboard={true}
          />
        </div>
       <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white ">
       <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View ALL
      </button>
       </div>
      </div>
      <div className="bg-white  rounded-md w-full">
        <div className="w-full p-4 bg-white  rounded-md overflow-x-auto border-b">
          <Table
            headers={headerPropert1}
            data={dataproperty1}
            isDashboard={true}
          />
        </div>
        <div>
          {" "}
          <Table
            headers={headerAgent1}
            data={dataAgent1}
            isDashboard={true}
          />
        </div>
        <div className="flex items-center justify-center space-x-5 lg:space-x-28 w-full p-4 bg-white ">
       <button className="py-1 px-3 text-white bg-spale_sunshine rounded">
        View ALL
      </button>
       </div>
      </div>
    </div>
  );
};

export default MultipleProperties;
