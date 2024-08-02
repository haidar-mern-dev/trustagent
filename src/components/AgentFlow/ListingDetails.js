import React from "react";
import GoogleMap from "../shared/GoogleMap";
import { Verified } from "../../assets/svgs";
import Layout from "../layout";

const detailsData = [
  { text: "Property is For?", detail: "For Sale" },
  {
    text: "Property Address",
    detail: "24 King St, Sydney, NSW 2000, Australia",
  },
  { text: "Property Type", detail: "House" },
  { text: "Is it a Strata Property?", detail: "Yes" },
  { text: "Bedrooms", detail: "2" },
  { text: "Bathrooms", detail: "2" },
  { text: "No of Living Rooms", detail: "1" },
  { text: "Car Parking", detail: "1" },
  { text: "Built Size", detail: "200 m²" },
  { text: "Land Size", detail: "500 m²" },
];

const ListingDetails = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex lg:flex-row flex-col w-full gap-4">
          <div className="flex-1 bg-white rounded-sm border border-[#E4E3E4] p-4">
            <div className="flex flex-col w-full">
              <p className="font-sans font-semibold text-[16px] text-[#2C363F]">
                Details
              </p>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-3 mt-4 mb-8">
                {detailsData?.map((data, index) => (
                  <React.Fragment key={index}>
                    <p className="text-start font-sans font-medium text-[14px] text-[#2C363F]">
                      {data?.text}
                    </p>
                    <p className="md:text-end text-start font-sans font-normal text-[14px] text-[#767676]">
                      {data?.detail}
                    </p>
                  </React.Fragment>
                ))}
              </div>
              <p className="font-sans font-medium text-[14px] text-[#2C363F]">
                Description
              </p>
              <p className="font-sans font-normal mt-4 text-[14px] text-[#8C8C8C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-sm border border-[#E4E3E4] p-4 lg:p-0">
            <div className="h-[300px] lg:h-full">
              <GoogleMap />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <p className="font-sans font-semibold text-[18px] text-[#2C363F]">
            Property Ownership
          </p>
          <div className="flex gap-3 justify-start items-center">
            <span>{Verified}</span>
            <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
              Ownership is Verified.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetails;
