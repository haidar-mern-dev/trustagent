import React from "react";
import GoogleMap from "../shared/GoogleMap";
import Svgs from "../../assets/svgs";

const ListingDetails = ({ data }) => {
  const {
    listingType,
    propertyType,
    isStrata,
    bedrooms,
    bathrooms,
    noOfLivingRooms,
    carParking,
    propertySize,
    landSize,
    additionalInfo,
    address,
  } = data;

  const detailsData = [
    { text: "Property is For?", detail: listingType },
    {
      text: "Property Address",
      detail: `${address.street}, ${address.city}, ${address.state}, ${address.zipCode}, ${address.country}`,
    },
    { text: "Property Type", detail: propertyType },
    { text: "Is it a Strata Property?", detail: isStrata ? "Yes" : "No" },
    { text: "Bedrooms", detail: bedrooms },
    { text: "Bathrooms", detail: bathrooms },
    { text: "No of Living Rooms", detail: noOfLivingRooms },
    { text: "Car Parking", detail: carParking },
    { text: "Built Size", detail: `${propertySize.value} ${propertySize.unit}` },
    { text: "Land Size", detail: `${landSize.value} ${landSize.unit}` },
  ];

  return (
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
              {additionalInfo}
            </p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-sm border border-[#E4E3E4] p-4 lg:p-0">
          <div className="h-[300px] lg:h-full">
            <GoogleMap lat={address.lat} lng={address.lng} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="font-sans font-semibold text-[18px] text-[#2C363F]">
          Property Ownership
        </p>
        <div className="flex gap-3 justify-start items-center">
          <span>
            <Svgs.Verified />
          </span>
          <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
            Ownership is Verified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
