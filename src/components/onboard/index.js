import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useLocation } from "react-router-dom";
import Tutorial from "./pages/Tutorial";
import PropertyForm from "./pages/RentForm";

const OnBoardPage = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen  bg-white md:p-20 p-4 main_container bg-cover bg-center">
      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-10">
        <div
          className="bg-theme_color h-2.5 rounded-full"
          style={{ width: "20%" }}
        />

        <div className="text-right text-sm font-medium mt-4">20% Completed</div>
      </div>
      {/* <Tutorial /> */}
      <PropertyForm />
      <div className=" py-4 px-8 flex justify-end gap-10 items-center">
        {page > 1 ? (
          <button
            onClick={handleBack}
            className="bg-theme_color text-white px-10 py-4 rounded"
          >
            Back
          </button>
        ) : (
          <div></div>
        )}
        <button
          onClick={handleNext}
          className="bg-theme_color text-white px-10 py-4  rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnBoardPage;
