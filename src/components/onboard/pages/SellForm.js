import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../../redux/formSlice";
import { DatePicker, TimePicker } from "antd";
import Svgs from "../../../assets/svgs";
import moment from "moment"; 
import Select from "react-select";

const SellForm = () => {
  const formData = useSelector((state) => state.form.formData);
  const [saleMethod, setSaleMethod] = useState(formData.saleType || "");
  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setSaleMethod(e.target.value);
    dispatch(setFormData({ saleType: e.target.value }));
  };

  const handleStartDateChange = (date) => {
    if (date) {
      const formattedDate = moment(date).format("DD/MM/YYYY");
      dispatch(setFormData({ startDate: formattedDate }));
    }
  };

  const handleEndDateChange = (date) => {
    if (date) {
      const formattedDate = moment(date).format("DD/MM/YYYY");
      dispatch(setFormData({ endDate: formattedDate }));
    }
  };

  const handleTimeChange = (time, timeString) => {
    dispatch(setFormData({ endTime: timeString }));
  };

  const calanderIcon = <Svgs.calanderIcon />;
  const clockIcon = <Svgs.clockIcon />;

  const agreementOptions = [
    { value: "Exclusive", label: "Exclusive" },
    { value: "Non-Exclusive", label: "Non-Exclusive" },
  ];

  return (
    <div className="pt-12 flex md:flex-row flex-col md:justify-between">
      <div className="flex flex-col gap-2">
        <p className="font-[800] text-[32px] text-[#2C363F]">HOW TO SELL</p>
        <p className="font-normal text-[14px] text-[#8C8C8C]">
          Add the details how to sell your property
        </p>
        <div className="mt-4 flex flex-col gap-4">
          <p className="font-sans font-semibold text-[14px] text-black">
            Sales Method
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="auction"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChange}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "auction"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "auction"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Auction
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="treaty"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChange}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "treaty"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "treaty"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Private Treaty
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center text-sm font-medium">
                <input
                  type="radio"
                  name="saleType"
                  value="recommended"
                  className="w-4 h-4 rounded-full cursor-pointer"
                  onChange={handleRadioChange}
                  style={{ accentColor: "rgb(255, 191, 0)" }}
                  checked={saleMethod === "recommended"}
                />
                <span
                  className={`ml-2 font-sans text-[14px] ${
                    saleMethod === "recommended"
                      ? "text-black font-medium"
                      : "text-[#8C8C8C] font-normal"
                  }`}
                >
                  Agent to Recommend
                </span>
              </label>
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-black">
            Expected Price Range
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
            <div className="flex gap-2 items-center w-full">
              <p className="font-sans font-normal text-[14px] text-black w-[35px]">
                From
              </p>
              <input
                type="number"
                name="minPrice"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                placeholder="$150000"
                value={formData.minPrice}
                onChange={(e) =>
                  dispatch(setFormData({ minPrice: e.target.value }))
                }
              />
            </div>
            <div className="flex gap-2 items-center w-full">
              <p className="font-sans font-normal text-[14px] text-black w-[35px] text-center">
                To
              </p>
              <input
                type="number"
                name="maxPrice"
                className="h-[50px] w-full border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                placeholder="$500000"
                value={formData.maxPrice}
                onChange={(e) =>
                  dispatch(setFormData({ maxPrice: e.target.value }))
                }
              />
            </div>
          </div>
          <p className="font-sans font-semibold text-[14px] text-black">
            Time Frame to Receive Bids
          </p>
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                Start Date
              </p>
              <DatePicker
                suffixIcon={calanderIcon}
                placeholder="dd/mm/yyyy"
                name="startDate"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleStartDateChange}
                format="DD/MM/YYYY"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                End Date
              </p>
              <DatePicker
                suffixIcon={calanderIcon}
                placeholder="dd/mm/yyyy"
                name="endDate"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleEndDateChange}
                format="DD/MM/YYYY"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-sans font-semibold text-[14px] text-black">
                End Time
              </p>
              <TimePicker
                suffixIcon={clockIcon}
                placeholder="Select time"
                name="endTime"
                className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                onChange={handleTimeChange}
                format="hh:mm A"
                use12Hours
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-sans font-semibold text-[14px] text-black">
                Agency Agreement Type
              </label>

              <Select
                options={agreementOptions}
                className="w-full react_select form-input shrink-0 rounded [background:var(--Primary-Base-White,#FFF)#E4E3E4"
                placeholder="e.g Exclusive"
                value={agreementOptions?.find(
                  (option) => option?.value === formData?.agreementType?.value
                )}
                onChange={(option) =>
                  dispatch(setFormData({ agreementType: option }))
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4 max-w-sm w-full rounded border border-theme_color bg-light_theme border-solid h-1/2">
        <h3 className="h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)] text-xl font-semibold flex justify-center items-center uppercase">
          Agency Agreement Types
        </h3>
        <ul className="custom-list p-6">
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            <span className="font-sans font-extrabold text-[18px] text-[#2C363F]">
              Exclusive:
            </span>
            Exclusive agency agreements grant one agent the exclusive right to
            sell your property, earning a commission if sold during the
            agreement, even if sold by another party.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            <span className="font-sans font-extrabold text-[18px] text-[#2C363F]">
              SOLE:
            </span>
            A sole agency agreement allows one agent to sell your property, but
            you can find a buyer yourself. If you find a buyer independently, no
            commission is owed to the agent.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            <span className="font-sans font-extrabold text-[18px] text-[#2C363F]">
              OPEN:
            </span>
            This allows you to list your property with multiple agents, paying
            commission only to the one who finds the buyer.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            <span className="font-sans font-extrabold text-[18px] text-[#2C363F]">
              MULTIPLE:
            </span>
            This involves an agent in a network selling your home through
            auction or private sale, with commission paid to the agent you
            signed with.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellForm;
