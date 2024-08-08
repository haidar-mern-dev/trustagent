import React from "react";
import Layout from "../layout";
import Svgs from "../../assets/svgs";

const ChatSupport = () => {
  return (
      <div className="w-full h-[45rem] bg-white rounded-[4px] flex">
        <div className="w-[34.8%] h-full flex flex-col gap-6">
          <p className="font-sans font-medium text-base text-[#202020] px-4 pt-4">
            Chat with Support team
          </p>
          <div className="w-full flex justify-between items-center px-4 h-[80px] bg-[#FFF9E5] border-t-[2px] border-t-[#D4D4D4] border-b-[2px] border-b-[#D4D4D4]">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-black">
                {/* have to add an image here */}
              </div>
              <div className="flex flex-col items-center">
                <p className="font-sans font-semibold text-[14px] text-black">
                  James Frank
                </p>
                <p className="font-sans font-normal text-[14px] text-[#565656]">
                  Any updates?
                </p>
              </div>
            </div>
            <p className="font-sans font-semibold text-[14px] text-[#565656]">
              5 min ago
            </p>
          </div>
        </div>
        <div className="w-[0.2%] h-full bg-[#D4D4D4] border border-[#D4D4D4]"></div>
        <div className="w-[65%] h-full px-4 pt-4 flex flex-col justify-between pb-6">
          <div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <div className="w-[50px] h-[50px] bg-black rounded-full ">
                {/* <img
                            src={profile}
                            alt="Your Image"
                            className="w-10 h-10 rounded-full"
                          /> */}
              </div>
              <div className="w-[37%] h-[36px] bg-[#F8F9FA] rounded-[100px] flex items-center justify-center">
                <p className="font-sans font-normal text-[14px] text-black">
                  Hi there! How can we assist you today?
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-6">
              <div className="w-[27%] h-[36px] bg-[#FFBF00] rounded-[100px] flex items-center justify-center">
                <p className="font-sans font-medium text-[14px] text-[#2C363F]">
                  How can I sell my property?
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center px-2 w-full bg-[#F8F9FA] h-10">
            <div className="flex w-full h-full items-center gap-4">
              <Svgs.Attachment/>
              <input
                type="text"
                placeholder="Type here"
                className="w-full h-full focus:outline-none bg-[#F8F9FA]"
              ></input>
            </div>
            <Svgs.SendIcon/>
          </div>
        </div>
      </div>
  );
};

export default ChatSupport;
