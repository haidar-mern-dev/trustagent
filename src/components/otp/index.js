import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useLocation } from "react-router-dom";

const OtpForm = () => {
  const location = useLocation();
  const state = location.state;
  const [otp, setOtp] = useState("");
  console.log("Form submitted:", state);

  const onSubmit = (data) => {
    console.log("Form submitted:", state?.email);
  };

  return (
    <div
      className="min-h-screen flex md:flex-row flex-col md:justify-between justify-center items-center bg-white md:p-20 p-4
    main_container bg-cover bg-center"
    >
      <div className="lg:w-[65%] xl:w-[35%] w-full lg:pr-4">
        <h2 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold leading-[normal]">
          Trust Agent
        </h2>
        <h3 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold uppercase md:my-4 my-2">
          Enter otp
        </h3>
        <p className="self-stretch text-[#8C8C8C] text-base font-normal leading-[normal]">
          Please enter the OTP that was sent to your email {state?.email}
        </p>
        <div className="my-5 w-full otp_container ">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span> </span>}
            renderInput={(props) => (
              <input
                {...props}
                className="rounded border [background:var(--Primary-Base-White,#FFF)] border-solid border-[#E4E3E4]"
              />
            )}
            inputStyle={{
              width: "53px",
              height: "50px",
            }}
          />
          <button className="w-full py-4 mt-5 bg-theme_color text-white rounded-lg font-semibold">
            SEND
          </button>
        </div>
      </div>

      <div className="md:my-0 my-2 max-w-sm w-full shrink-0 rounded border border-theme_color bg-light_theme border-solid">
        <h3 className=" h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)]  text-xl font-semibold flex justify-center  items-center  uppercase">
          WHY WE NEED VERIFICATION?
        </h3>
        <ul className="custom-list p-6">
          <li className="text-gray-600 my-4">We value verified accounts.</li>
          <li className="text-gray-600 my-4">
            Reduces risk of unauthorized access.
          </li>
          <li className="text-gray-600 my-4">
            Builds user trust by prioritizing security.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtpForm;
