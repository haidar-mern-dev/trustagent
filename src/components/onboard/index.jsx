import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/formSlice";
import Tutorial from "./pages/Tutorial";
import PropertyForm from "./pages/RentForm";
import SellForm from "./pages/SellForm";
import Validate from "./pages/Validate";
import Review from "./pages/Review";
import { Modal } from "antd";
import "./onboard.css";
import Svgs from "../../assets/svgs";
import OnRentForm from "./pages/OnRentForm";
import AgentTutorial from "./pages/AgentOnboarding/Tutorial";
import AgencyDetails from "./pages/AgentOnboarding/AgencyDetails";
import ReviewInfo from "./pages/AgentOnboarding/ReviewInfo";

const OnBoardPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.form.page);
  const formData = useSelector((state) => state.form.formData);
  const [publishModal, setPublishModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [userType, setUserType] = useState("agent"); // This can be set based on the user type

  const handleNext = () => {
    if (userType === "agent" && page >= 3) {
      // Do nothing, as there are only 3 pages for agents
      handlePublishClick(); // Trigger submit action
    } else {
      dispatch(setPage(page + 1));
    }
  };

  const handlePublishClick = () => {
    if (userType === "agent") {
      setSubmitModal(true);
    } else {
      setPublishModal(true);
    }
  };


  const handleBack = () => {
    dispatch(setPage(page - 1));
  };

  const handleClosePublishModal = () => {
    setPublishModal(false);
    setSubmitModal(false);
  };

  const renderPage = () => {
    switch (page) {
      case 1:
        return userType === "agent" ? <AgentTutorial /> : <Tutorial />;
      case 2:
        return userType === "agent" ? <AgencyDetails /> : <PropertyForm />;
      case 3:
        return userType === "agent" ? <ReviewInfo /> : formData?.propertyFor === "For sale" ? <SellForm /> : <OnRentForm />;
      case 4:
        return <Validate />;
      case 5:
        return <Review />;
      default:
        return <> </>;
    }
  };

  const getProgressWidth = () => {
    switch (page) {
      case 1:
        return userType === "agent" ? "33%" : "20%";
      case 2:
        return userType === "agent" ? "66%" : "40%";
      case 3:
        return userType === "agent" ? "100%" : "60%";
      case 4:
        return "80%";
      case 5:
        return "100%";
      default:
        return "20%";
    }
  };

  return (
    <div className="min-h-screen bg-white md:p-20 p-4 main_container bg-cover bg-center">
      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-10">
        <div className="bg-theme_color h-2.5 rounded-full" style={{ width: getProgressWidth() }} />
        <div className="text-right text-sm font-medium mt-4">
          {getProgressWidth()} Completed
        </div>
        <div className="w-full flex justify-between mt-4">
          <p className="font-[800] text-[26px] text-[#2C363F]">Trust Agent</p>
          {page === 5 && (
            <button className="w-[116px] h-[44px] rounded-[4px] border border-[#FFBF00] bg-white font-sans font-[700] text-base text-[#2C363F]">
              Edit
            </button>
          )}
        </div>
      </div>
      <Modal
        title="PUBLISH PROPERTY!"
        visible={publishModal}
        centered={true}
        footer={false}
        closable={false}
        onOk={handleClosePublishModal}
        onCancel={handleClosePublishModal}
        className="publish-modal"
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex gap-4 items-center">
            <Svgs.publishOne />
            <p className="font-sans font-normal text-base text-[#717171]">
              Your validation is pending until we verify the documents.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Svgs.publishTwo />
            <p className="font-sans font-normal text-base text-[#717171]">
              After Validation your property would be live for agents to bid on.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Svgs.publishThree />
            <p className="font-sans font-normal text-base text-[#717171]">
              You can make changes or cancel the process at any time.
            </p>
          </div>
          <button className="w-[170px] h-[44px] rounded-[4px] bg-theme_color font-sans font-semibold text-[14px] text-[#2C363F]">
            OK
          </button>
        </div>
      </Modal>

      <Modal
        title="SUBMIT DETAILS!"
        visible={submitModal}
        centered={true}
        footer={false}
        closable={false}
        onOk={handleClosePublishModal}
        onCancel={handleClosePublishModal}
        className="publish-modal"
      >
        <div className="relative">
          <span
            className="absolute -top-[73px] -right-[39px] p-2 cursor-pointer"
            onClick={handleClosePublishModal}
          >
            <Svgs.crossIcon />
          </span>
          <div className="flex flex-col justify-center items-start gap-4 mt-6">
            <div className="flex gap-4 items-start">
              <Svgs.publishOne />
              <p className="font-sans font-normal text-base text-[#717171]">
                Verification takes up to 48hrs.
              </p>
            </div>
            <div className="flex gap-4 items-start">
              <Svgs.publishTwo />
              <p className="font-sans font-normal text-base text-[#717171]">
                You can browse listings but cannot bid until verified.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 gap-4">
            <button className="w-[170px] h-[44px] rounded-[4px] bg-theme_color font-sans font-semibold text-[14px] text-[#2C363F]">
              OK
            </button>
          </div>
        </div>
      </Modal>

      {renderPage()}
      <div className="py-12 px-8 flex justify-end gap-10 items-center">
        {page > 1 && (
          <button
            onClick={handleBack}
            className="border border-theme_color text-black font-sans font-[700] text-base h-[44px] w-[196px] rounded"
          >
            Back
          </button>
        )}
        <button
          onClick={page === 5 || (userType === "agent" && page === 3) ? handlePublishClick : handleNext}
          className="bg-theme_color text-black font-sans font-[700] text-base h-[44px] w-[196px] rounded"
        >
          {page === 5 || (userType === "agent" && page === 3) ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default OnBoardPage;
