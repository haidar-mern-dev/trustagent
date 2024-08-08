import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Svgs from "../../assets/svgs";
import { setFormData } from "../../redux/formSlice";

const attachmentOptions = [
  { value: "passport", label: "Passport" },
  { value: "license", label: "Driver’s License" },
  { value: "medicare", label: "Medicare Card" },
];

const AddAttachment = ({ input = true }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [additionalImage, setAdditionalImage] = useState(null);

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
    <div className="flex flex-col gap-4 mt-3">
      {input === true && (
        <>
          <p className="font-sans font-semibold text-base text-black">
            Name(s) of Property Owner
          </p>
          <input
            type="text"
            name="ownerName"
            placeholder="e.g customer’s name"
            value={formData.ownerName}
            onChange={(e) =>
              dispatch(setFormData({ ownerName: e.target.value }))
            }
            className="w-full h-[50px] bg-white border border-[#E4E3E4] rounded-[4px] p-4 font-sans font-normal text-[14px] text-[#8c8c8c]"
          />
        </>
      )}
      <div>
        <label className="self-stretch text-black text-sm font-semibold leading-[normal] mb-3 block">
          Choose Attachment
        </label>
        <Select
          options={attachmentOptions}
          placeholder="e.g driver’s license"
          className="w-full react_select font-sans font-normal text-[14px] text-[#8c8c8c]"
          value={attachmentOptions?.find(
            (option) => option?.value === formData?.attachment?.value
          )}
          onChange={(option) => dispatch(setFormData({ attachment: option }))}
        />
      </div>
      {formData?.attachment?.value === "passport" ? (
        <div className="md:w-1/2 w-full h-[107px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">
          {additionalImage ? (
            <img
              src={additionalImage}
              alt="Additional"
              className="w-full h-full object-cover rounded-[4px]"
            />
          ) : (
            <label className="cursor-pointer flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setAdditionalImage)}
                className="hidden"
              />
              <Svgs.plusIcon />
            </label>
          )}
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-3">
          <div className="w-full h-[107px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">
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
                <p className="font-sans font-normal text-[12px] text-[#8c8c8c] pb-2">
                  Front
                </p>
                <Svgs.plusIcon />
              </label>
            )}
          </div>
          <div className="w-full h-[107px] bg-white border border-[#E4E3E4] rounded-[4px] flex flex-col gap-3 justify-center items-center">
            {backImage ? (
              <img
                src={backImage}
                alt="Back"
                className="w-full h-full object-cover rounded-[4px]"
              />
            ) : (
              <label className="cursor-pointer flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, setBackImage)}
                  className="hidden"
                />
                <p className="font-sans font-normal text-[12px] text-[#8c8c8c] pb-2">
                  Back
                </p>
                <Svgs.plusIcon />
              </label>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAttachment;
