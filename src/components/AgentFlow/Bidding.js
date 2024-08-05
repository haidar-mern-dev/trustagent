import React from "react";
import Select from "react-select";

const inputData = [
  { label: "Name", placeholder: "e.g Deven" },
  { label: "Agency Name", placeholder: "e.g XYZ" },
  { label: "Price Estimate", placeholder: "e.g XYZ" },
  { label: "Agent Commission", placeholder: "e.g 30%" },
  {
    label: "Scenario",
    placeholder: "Select Scenario",
    options: [
      { value: "Private", label: "Private" },
      { value: "Public", label: "Public" },
      { value: "Corporate", label: "Corporate" },
    ],
  },
  {
    label: "Agreement Type",
    placeholder: "Select Agreement Type",
    options: [
      { value: "Exclusive", label: "Exclusive" },
      { value: "Non-Exclusive", label: "Non-Exclusive" },
    ],
  },
  {
    label: "Job",
    placeholder: "Select Job",
    options: [
      { value: "Selling", label: "Selling" },
      { value: "Buying", label: "Buying" },
      { value: "Renting", label: "Renting" },
    ],
  },
];

const Bidding = () => {
  return (
    <div className="min-h-screen flex justify-start bg-white md:px-20 md:pt-28 px-8 pt-16 main_container bg-cover bg-center">
      <div className="w-full h-full flex flex-col gap-10">
        <p className="font-sans font-extrabold text-[30px] text-[#2C363F]">
          SUBMIT A BID
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:w-[76%] md:w-[85%] w-[98%] gap-4">
          {inputData.map((data, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <label className="font-sans font-semibold text-base text-start text-[#000000]">
                {data.label}
              </label>
              {data.options ? (
                <Select
                  options={data.options}
                  placeholder={data.placeholder}
                  className="react_select form-input h-[50px] focus:outline-none shrink-0 rounded  [background:var(--Primary-Base-White,#FFF)#E4E3E4 rounded-[4px]"
                />
              ) : (
                <input
                  type="text"
                  className="h-[50px] border border-[#E4E3E4] rounded-[4px] p-4 focus:outline-none"
                  placeholder={data.placeholder}
                />
              )}
            </div>
          ))}
        </div>
        <button className="w-[149px] h-[44px] bg-[#FFBF00] font-sans font-semibold text-[14px] text-[#2C363F] rounded-[4px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Bidding;
