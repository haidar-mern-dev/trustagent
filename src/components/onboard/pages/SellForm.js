import React from "react";

const SellForm = () => {
  return (
    <div className="pt-12 flex md:flex-row flex-col md:justify-between ">
      <div className="flex flex-col gap-2">
        <p className="font-[800] text-[32px] text-[#2C363F]">HOW TO SELL</p>
        <p className="font-normal text-[16px] text-[#8C8C8C]">
          Add the details how to sell your property
        </p>
        <p className="font-[600] text-[14px] text-[#2C363F]">Sales Method</p>
        <div className="">
          <div>
            <label className="inline-flex items-center text-sm font-medium">
              <input
                type="radio"
                name="propertyFor"
                value="sale"
                className="w-4 h-4 rounded-full cursor-pointer"
                style={{ accentColor: "rgb(255, 191, 0)" }}
              />
              <span className="ml-2">Auction</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center text-sm font-medium">
              <input
                type="radio"
                name="propertyFor"
                value="rent"
                className="w-4 h-4 rounded-full cursor-pointer"
                style={{ accentColor: "rgb(255, 191, 0)" }}
              />
              <span className="ml-2">Private Treaty</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center text-sm font-medium">
              <input
                type="radio"
                name="propertyFor"
                value="rent"
                className="w-4 h-4 rounded-full cursor-pointer"
                style={{ accentColor: "rgb(255, 191, 0)" }}
              />
              <span className="ml-2">Agent to Recommend</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellForm;
