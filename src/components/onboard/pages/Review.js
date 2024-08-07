import React from "react";
import { useSelector } from "react-redux";

const Review = () => {
  const formData = useSelector((state) => state.form.formData);
  console.log("sdfwef", formData);
  const reviewData = [
    {
      label: "Property Type",
      value: formData?.propertyType?.label,
    },
    {
      label: "Is it a Strata Property",
      value: formData?.strataProperty?.label,
    },
    {
      label: "Bedrooms",
      value: formData?.bedrooms?.value,
    },
    {
      label: "Bathrooms",
      value: formData?.bathrooms?.value,
    },
    {
      label: "Number of Living Rooms",
      value: formData?.livingRooms?.value,
    },
    {
      label: "Car Parking",
      value: formData?.carParking?.value,
    },
    {
      label: "Property Size",
      value: `${formData?.propertySize} ${formData?.propertySizeUnit?.label}`,
    },
    {
      label: "Land Size",
      value: `${formData?.landSize} ${formData?.landSizeUnit?.label}`,
    },
  ];
  const saleData = [
    {
      label: "Sales Method",
      value: formData?.saleType,
    },
    {
      label: "Expected Price Range",
      value: `$${formData?.minPrice}-$${formData?.maxPrice}`,
    },
    {
      label: "Time Frame to Receive Bids",
      value: `${formData?.startDate}-${formData?.endDate}`,
    },
    {
      label: " Agency Agreement Type",
      value: formData?.agreementType?.label,
    },
  ];
  return (
    <div className="pt-16 flex md:flex-row flex-col md:justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-[800] text-[32px] text-[#2C363F]">
          REVIEW INFORMATION
        </p>
        <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
          Property is for?
        </p>
        <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
          {formData?.propertyFor}
        </p>
        <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
          Property Address
        </p>
        <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
          {formData?.address}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-4">
          {reviewData?.map((data, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                {data?.label}
              </p>
              <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                {data?.value}
              </p>
            </div>
          ))}
        </div>
        <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
          Description
        </p>
        <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
          {formData?.additionalInfo}
        </p>
        <hr />
        <div className="grid lg:grid-cols-3  grid-cols-2 w-full gap-4">
          {saleData?.map((data, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                {data?.label}
              </p>
              <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                {data?.value}
              </p>
            </div>
          ))}
        </div>
        <hr />
      </div>
      <div className="mt-4 max-w-sm w-full rounded border border-theme_color bg-light_theme border-solid h-1/2">
        <h3 className="h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)] text-xl font-semibold flex justify-center items-center uppercase">
          NEXT STEPS
        </h3>
        <ul className="custom-list p-6">
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            Receive competitive bids once the listing goes live.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            Interview one or more of the shortlisted agents.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            Get a lawyer to prepare a contract of sale
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
