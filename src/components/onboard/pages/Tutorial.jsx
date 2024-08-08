import React from "react";
import Svgs from "../../../assets/svgs";
import Timage from "../../../assets/images/tutorial.png";

const Tutorial = () => {
  return (
    <div className=" flex md:flex-row flex-col-reverse md:justify-between justify-center items-center  min-h-[75vh]">
      <div className="lg:w-[50%] w-full lg:pr-4 md:mt-0 mt-5">
        <div className="space-y-2 bg">
          <div className="flex items-center md:w-[528px] w-full p-2 space-x-3 shrink-0 rounded bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]">
            <div className="bg-theme_color p-3 "><Svgs.SaveMoney/></div>
            <span className="text-base font-bold ">
              Get competitive quotes to sell or lease your property.
            </span>
          </div>
          <div className="flex items-center md:w-[528px] w-full p-2 space-x-3 shrink-0 rounded bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]">
            <div className="bg-theme_color p-3 "><Svgs.SaveMoney/></div>
            <span className="text-base font-bold "> No agent hassles.</span>
          </div>
          <div className="flex items-center md:w-[528px] w-full p-2 space-x-3 shrink-0 rounded bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]">
            <div className="bg-theme_color p-3 "><Svgs.SaveMoney/></div>
            <span className="text-base font-bold ">No fees.</span>
          </div>
          <div className="flex items-center md:w-[528px] w-full p-2 space-x-3 shrink-0 rounded bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]">
            <div className="bg-theme_color p-3 "><Svgs.SaveMoney/></div>
            <span className="text-base font-bold ">
              It's as easy as 1, 2, 3.
            </span>
          </div>
          <div className="flex items-center md:w-[528px] w-full p-2 space-x-3 shrink-0 rounded bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)]">
            <div className="bg-theme_color p-3 "><Svgs.SaveMoney/></div>
            <span className="text-base font-bold ">Return anytime.</span>
          </div>
        </div>
      </div>

      <div className="relative ">
        <div className="text-[28px] font-bold leading-9 mb-4 text-right md:block hidden">
          EVERYTHING YOU WILL NEED <br />
          ALONG THE WAY!
        </div>
        <img
          src={Timage}
          alt="Property"
          className="rounded-lg md:h-full h-[308px]"
        />
      </div>
    </div>
  );
};

export default Tutorial;
