import React, { useState } from "react";
import Layout from "../../components/layout/index";
import StatusBadge from "../../components/commons/StatusBadge";
import TypeBadge from "../../components/commons/TypeBadge";
import Table from "../../components/commons/Table";
import Breadcrumb from "../../components/commons/Breadcrumb";
import Svgs from "../../assets/svgs";
import Pagination from "../../components/commons/Pagination";
const headers = [
  "#",
  "Address",
  "Total Bids",
  "Expiring",
  "Status",
  "Type",
  "Action",
];
const data = [
  [
    "1",
    "24 King St, Sydney, NSW 2000, Australia",
    "30",
    "7 days",
    <StatusBadge status="Won" />,
    "Sale",
    <>
      <button className="py-1 px-3 mr-2 text-custom_gray border border-spale_sunshine rounded">
        <Svgs.ViewIcon />
      </button>
      <button className="py-1 px-3 text-custom_gray border border-spale_sunshine rounded">
        <Svgs.EditIcon />
      </button>
    </>,
  ],
  [
    "2",
    "24 King St, Sydney, NSW 2000, Australia",
    "30",
    "5 days",
    <StatusBadge status="Lost" />,
    <TypeBadge type="Lease" />,
    <>
      <button className="py-1 px-3 mr-2 text-custom_gray border border-spale_sunshine rounded">
        <Svgs.ViewIcon />
      </button>
      <button className="py-1 px-3 text-custom_gray border border-spale_sunshine rounded">
        <Svgs.EditIcon />
      </button>
    </>,
  ],
];
const breadcrumbItems = [{ label: "View Bids" }];
export default function ViewBidsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
  return (
    <Layout>
      <div className="font-semibold	tex-base">View Bids</div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex w-2/6 mt-3 relative ">
        <div className="absolute left-3 top-3">
          <Svgs.SearchIcon />
        </div>
        <input
          placeholder="Search "
          className="h-[45px] shrink-0 rounded border [background:var(--Primary-Base-White,#FFF)#E4E3E4 px-3 flex-grow outline-none pl-11"
        />
        <button className="ml-3">
            <Svgs.FilterIcon />
        </button>
      </div>
      <div className="bg-white shadow-header-custom  w-full flex items-center justify-center p-4 mt-4">
        <Table headers={headers} data={data} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Layout>
  );
}
