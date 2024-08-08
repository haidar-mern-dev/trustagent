import React from "react";
import { useLocation } from "react-router-dom";

const BiddingPreview = () => {
  const location = useLocation();
  const { values } = location.state || {};
  const data = [
    {
      name: "Name",
      value: values?.name,
    },
    {
      name: "Agency Name",
      value: values?.agencyName,
    },
    {
      name: "Agreement Type",
      value: values?.agreementType,
    },
    {
      name: "Commission",
      value: values?.commission,
    },
    {
      name: "Sales Method",
      value: values?.salesMethod,
    },
    {
      name: "Price Estimate",
      value: `$${values?.minPrice} to $${values?.maxPrice}`,
    },
    {
      name: "Property Styling Cost",
      value: `$${values?.minCost} to $${values?.maxCost}`,
    },
  ];

  // Get the free inclusions where the value is true
  const freeInclusions = Object.entries(values?.freeInclusions || {})
    .filter(([_, included]) => included)
    .map(([name]) => name);

  return (
    <div className="min-h-screen flex flex-col justify-start bg-white md:px-20 md:pt-28 px-8 pt-16 main_container bg-cover bg-center">
      <p className="font-sans font-extrabold text-[30px] text-[#2C363F] w-full">
        REVIEW INFORMATION
      </p>
      <div className="lg:w-[76%] md:w-[85%] w-[98%] flex flex-col gap-6">
        <div className="gap-6 w-full mt-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
          {data.map((options, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                {options.name}
              </p>
              <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                {options.value}
              </p>
            </div>
          ))}
        </div>
        <div>
          <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
            Description
          </p>
          <p className="mt-2 font-sans font-normal text-[14px] text-[#8C8C8C]">
            {values?.description}
          </p>
        </div>
        <div>
          <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
            Free Inclusions
          </p>
          <div className="flex flex-col gap-3 mt-2">
            {freeInclusions.length > 0 ? (
              freeInclusions.map((inclusion, index) => (
                <p
                  key={index}
                  className="font-sans font-normal text-[14px] text-[#8C8C8C]"
                >
                  {inclusion}
                </p>
              ))
            ) : (
              <p className="font-sans font-normal text-[14px] text-[#8C8C8C]">
                No free inclusions
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-[149px] h-[44px] bg-[#FFBF00] font-sans font-semibold text-[14px] text-[#2C363F] rounded-[4px] mt-3"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BiddingPreview;
