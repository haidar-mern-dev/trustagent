import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../../../redux/formSlice";
import Select from "react-select";
import Svgs from "../../../assets/svgs";
import AddAttachment from "../../commons/AddAttachment";

const attachmentOptions = [
  { value: "rates", label: "Rates Notice" },
  { value: "strata", label: "Strata Notice" },
];

const Validate = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const [attachments, setAttachments] = useState([<AddAttachment key={0} />]);
  const [frontImage, setFrontImage] = useState(null);

  const handleAddAttachment = () => {
    if (attachments.length < 3) {
      setAttachments([
        ...attachments,
        <AddAttachment key={attachments.length} />,
      ]);
    }
  };
  const handleImageUpload = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setImage(upload.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-12 flex md:flex-row flex-col md:justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-[800] text-[32px] text-[#2C363F]">
          VALIDATE YOU OWN THE PROPERTY
        </p>
        <p className="font-normal text-[14px] text-[#8C8C8C]">
          Please add the following attachments to validate your own property.
        </p>

        {attachments.map((component, index) => (
          <div key={index}>{component}</div>
        ))}

        <div className="flex gap-4 items-center w-full">
          <button
            className="w-[55px] h-[50px] bg-white border border-[#FFBF00] font-normal text-[24px] rounded-[4px] flex flex-col gap-3 justify-center items-center"
            onClick={handleAddAttachment}
          >
            +
          </button>
          <p className="font-sans font-normal text-[18px] text-[#717171]">
            Add more attachments like driver’s licence.
          </p>
        </div>

        <hr />
        <div className="flex gap-4 items-center w-full">
          <div className="w-[55px] h-[50px] bg-white border border-[#FFBF00] rounded-[4px] flex flex-col gap-3 justify-center items-center">
            <span className="cursor-pointer font-normal text-[24px]">+</span>
          </div>
          <p className="font-sans font-normal text-[18px] text-[#717171]">
            You can add up to 3 people’s info.
          </p>
        </div>
        <div>
          <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
            Choose Attachment
          </label>
          <Select
            options={attachmentOptions}
            placeholder="e.g strata notice"
            className="w-full react_select font-sans font-normal text-[14px] text-[#8c8c8c]"
            value={attachmentOptions?.find(
              (option) => option?.value === formData?.attachment?.value
            )}
            onChange={(option) => dispatch(setFormData({ attachment: option }))}
          />
        </div>
        <div className="md:w-[35%] w-full h-[192px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">
          {frontImage ? (
            <img
              src={frontImage}
              alt="Front"
              className="w-full h-full object-cover rounded-[4px]"
            />
          ) : (
            <label className="cursor-pointer flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setFrontImage)}
                className="hidden"
              />

              <Svgs.plusIcon />
            </label>
          )}
        </div>
      </div>
      <div className="mt-4 max-w-sm w-full rounded border border-theme_color bg-light_theme border-solid h-1/2">
        <h3 className="h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)] text-xl font-semibold flex justify-center items-center uppercase">
          Mandatory Info
        </h3>
        <ul className="custom-list p-6">
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            Please be informed that this information is a mandatory requirement
            under the Property and Stock Business Agents Act 2002.
          </li>
          <li className="font-sans font-normal text-[18px] text-[#8c8c8c]">
            This information will be shared with the Agent you choose to sell or
            list your property with.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Validate;
