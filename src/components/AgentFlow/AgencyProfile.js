import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Layout from "../layout";
import Svgs from "../../assets/svgs";

const inputData = [
  {
    label: "Suburb.Area Covered",
    name: "area",
    placeholder: "Enter area",
  },
  {
    label: "Real Estate License Number",
    name: "licenseNumber",
    placeholder: "Enter your license number",
  },
  {
    label: "License In charge (Name) ",
    name: "license",
    placeholder: "Enter license Incharge Name",
  },
  {
    label: "License In charge (Number) ",
    name: "licenseNo",
    placeholder: "Enter license Incharge Number",
  },
  {
    label: "Add Bio",
    name: "bio",
    placeholder: "Enter your bio",
  },
  {
    label: "Add Links",
    name: "links",
    placeholder: "Enter your links",
  },
];

const validationSchema = Yup.object({
  area: Yup.string().required("Required"),
  licenseNumber: Yup.string().required("Required"),
  license: Yup.string().required("Required"),
  licenseNo: Yup.string().required("Required"),
  bio: Yup.string().required("Required"),
  links: Yup.string().required("Required"),
});

const AgencyProfile = () => {
  return (
    <Layout>
      <div className="-ml-5 w-full flex flex-col gap-6">
        <p className="font-sans font-medium text-base text-[#202020]">
          Agency Profile
        </p>
        <p className="font-sans font-normal text-[14px] text-[#202020] -mt-1">
          Agency Profile
        </p>
        <div className="md:w-[55%] w-[90%] h-auto rounded-[4px] border border-[#E4E3E4] bg-white flex md:items-start items-center justify-center py-5">
          <div className="w-[96%] h-[94%] flex flex-col gap-4 justify-start">
            <div className="flex gap-3 items-center">
              <div className="w-[80px] h-[80px] rounded-full border border-[#E4E3E4] flex justify-center items-center">
                <Svgs.cameraIcon />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="font-sans font-medium text-[14px] text-start text-[#535353]">
                  Profile Picture
                </p>
                <div className="flex gap-3">
                  <button className="w-[118px] h-[28px] rounded-[4px] bg-[#FFBF00] font-sans font-semibold text-[14px] text-[#2C363F]">
                    Upload Picture
                  </button>
                  <button className="w-[72px] h-[28px] rounded-[4px] bg-[#E4E3E4] font-sans font-semibold text-[14px] text-[#535353]">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                agencyName: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
                {inputData.map((data, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <label className="font-sans font-medium text-[14px] text-start text-[#535353]">
                      {data.label}
                    </label>
                    <Field
                      type="text"
                      name={data.name}
                      className="h-[36px] border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                      placeholder={data.placeholder}
                    />
                    <ErrorMessage
                      name={data.name}
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="col-span-2 w-[81px] h-[44px] bg-[#FFBF00] text-[#2C363F] rounded-[4px] font-sans font-medium text-[14px]"
                >
                  Save
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AgencyProfile;
