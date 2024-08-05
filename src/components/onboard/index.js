// src/OnBoardPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/formSlice";
import Tutorial from "./pages/Tutorial";
import PropertyForm from "./pages/RentForm";
import SellForm from "./pages/SellForm";

const OnBoardPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.form.page);

  const handleNext = () => {
    dispatch(setPage(page + 1));
  };

  const handleBack = () => {
    dispatch(setPage(page - 1));
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return <Tutorial />;
      case 2:
        return <PropertyForm />;
      case 3:
        return <></>;
      case 4:
        return <></>;
      default:
        return <> </>;
    }
  };

  const getProgressWidth = () => {
    switch (page) {
      case 1:
        return "20%";
      case 2:
        return "40%";
      case 3:
        return "60%";
      case 4:
        return "80%";
      default:
        return "20%";
    }
  };

  return (
    <div className="min-h-screen bg-white md:p-20 p-4 main_container bg-cover bg-center">
      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-10">
        <div
          className="bg-theme_color h-2.5 rounded-full"
          style={{ width: getProgressWidth() }}
        />
        <div className="text-right text-sm font-medium mt-4">
          {getProgressWidth()} Completed
        </div>
        <p className="font-[800] text-[26px] text-[#2C363F]">Trust Agent</p>
      </div>
      {renderPage()}
      <div className="py-4 px-8 flex justify-end gap-10 items-center">
        {page > 1 && (
          <button
            onClick={handleBack}
            className="bg-theme_color text-white px-10 py-4 rounded"
          >
            Back
          </button>
        )}
        <button
          onClick={handleNext}
          className="bg-theme_color text-white px-10 py-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OnBoardPage;
