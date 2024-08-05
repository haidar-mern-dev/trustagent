import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

// Input data configuration
const inputData = [
  { label: "Name", name: "name", placeholder: "e.g Deven" },
  { label: "Agency Name", name: "agencyName", placeholder: "e.g XYZ" },
  {
    label: "Agreement Type",
    name: "agreementType",
    placeholder: "e.g Exclusive",
    options: [
      { value: "Exclusive", label: "Exclusive" },
      { value: "Non-Exclusive", label: "Non-Exclusive" },
    ],
  },
  {
    label: "Commission",
    name: "commission",
    placeholder: "e.g 30%",
    options: [
      { value: "10%", label: "10%" },
      { value: "20%", label: "20%" },
      { value: "30%", label: "30%" },
      { value: "40%", label: "40%" },
      { value: "50%", label: "50%" },
    ],
  },
  {
    label: "Sales Method",
    name: "salesMethod",
    placeholder: "e.g Private",
    options: [
      { value: "Private", label: "Private" },
      { value: "Public", label: "Public" },
      { value: "Corporate", label: "Corporate" },
    ],
  },
];

const checkData = [
  { label: "Web Listing Fees", name: "web" },
  { label: "Floor plans", name: "floor" },
  { label: "Photography", name: "photography" },
  { label: "Pamphlets", name: "pamphlet" },
  { label: "Signboards", name: "signboard" },
  { label: "Copywriting", name: "copy" },
  { label: "Videography", name: "video" },
  { label: "Social Media Campaign", name: "campaign" },
];

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  agencyName: Yup.string().required("Required"),
  agreementType: Yup.string().required("Required"),
  commission: Yup.string().required("Required"),
  salesMethod: Yup.string().required("Required"),
  minPrice: Yup.number().required("Required"),
  maxPrice: Yup.number()
    .required("Required")
    .min(Yup.ref("minPrice"), "Max price should be greater than min price"),
  minCost: Yup.number().required("Required"),
  maxCost: Yup.number()
    .required("Required")
    .min(Yup.ref("minCost"), "Max cost should be greater than min cost"),
  description: Yup.string().required("Required"),
  freeInclusions: Yup.object().shape({
    web: Yup.boolean(),
    floor: Yup.boolean(),
    photography: Yup.boolean(),
    pamphlet: Yup.boolean(),
    signboard: Yup.boolean(),
    copy: Yup.boolean(),
    video: Yup.boolean(),
    campaign: Yup.boolean(),
  }),
});

const Bidding = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        agencyName: "",
        agreementType: "",
        commission: "",
        salesMethod: "",
        priceEstimate: "",
        minPrice: "",
        maxPrice: "",
        minCost: "",
        maxCost: "",
        description: "",
        freeInclusions: {},
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitted Values:", values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="min-h-screen flex justify-start bg-white md:px-20 md:pt-28 px-8 pt-16 main_container bg-cover bg-center">
          <div className="lg:w-[76%] md:w-[85%] w-[98%] h-full flex flex-col gap-10">
            <p className="font-sans font-extrabold text-[30px] text-[#2C363F]">
              SUBMIT A BID
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-4">
              {inputData.map((data, index) => (
                <div
                  className={`flex flex-col gap-2 ${
                    index === inputData.length - 1 ? "md:col-span-2" : ""
                  }`}
                  key={index}
                >
                  <label className="font-sans font-semibold text-base text-start text-[#000000]">
                    {data.label}
                  </label>
                  {data.options ? (
                    <Select
                      options={data.options}
                      placeholder={data.placeholder}
                      className="react_select form-input h-[50px] focus:outline-none shrink-0 rounded  [background:var(--Primary-Base-White,#FFF)#E4E3E4 rounded-[4px]"
                      onChange={(option) =>
                        setFieldValue(data.name, option.value)
                      }
                    />
                  ) : (
                    <Field
                      type="text"
                      name={data.name}
                      className="h-[50px] border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                      placeholder={data.placeholder}
                    />
                  )}
                  <ErrorMessage
                    name={data.name}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}
            </div>

            <label className="-mt-4 font-sans text-base font-semibold text-black">
              Price Estimate
            </label>
            <div className="flex flex-col gap-3 -mt-6">
              <div>
                <label className="inline-flex items-center text-sm font-medium">
                  <Field
                    type="radio"
                    name="priceEstimate"
                    value="range"
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ accentColor: "green" }}
                  />
                  <span
                    className={`ml-2 font-sans text-[14px] ${
                      values.priceEstimate === "range"
                        ? "text-black font-medium"
                        : "text-[#8C8C8C] font-normal"
                    }`}
                  >
                    Range
                  </span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center text-sm font-medium">
                  <Field
                    type="radio"
                    name="priceEstimate"
                    value="fixed"
                    className="w-4 h-4 rounded-full cursor-pointer"
                    style={{ accentColor: "green" }}
                  />
                  <span
                    className={`ml-2 font-sans text-[14px] ${
                      values.priceEstimate === "fixed"
                        ? "text-black font-medium"
                        : "text-[#8C8C8C] font-normal"
                    }`}
                  >
                    Fixed Amount
                  </span>
                </label>
              </div>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 w-full ">
                <div className="flex gap-2 items-center w-full">
                  <p className="font-sans font-normal text-[14px] text-black w-[35px]">
                    From
                  </p>
                  <Field
                    type="number"
                    name="minPrice"
                    className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                    placeholder="$150000"
                  />
                  <ErrorMessage
                    name="minPrice"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex gap-2 items-center w-full">
                  <p className="font-sans font-normal text-[14px] text-black w-[35px] text-center">
                    To
                  </p>
                  <Field
                    type="number"
                    name="maxPrice"
                    className="h-[50px] w-full border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                    placeholder="$500000"
                  />
                  <ErrorMessage
                    name="maxPrice"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <p className="font-sans font-semibold text-base text-black">
                Property Styling Cost
              </p>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 w-full">
                <div className="flex gap-2 items-center w-full">
                  <p className="font-sans font-normal text-[14px] text-black w-[35px]">
                    From
                  </p>
                  <Field
                    type="number"
                    name="minCost"
                    className="h-[50px] border w-full border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                    placeholder="$150000"
                  />
                  <ErrorMessage
                    name="minCost"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex gap-2 items-center w-full">
                  <p className="font-sans font-normal text-[14px] text-black w-[35px] text-center">
                    To
                  </p>
                  <Field
                    type="number"
                    name="maxCost"
                    className="h-[50px] w-full border border-[#E4E3E4] rounded-[4px] p-3 focus:outline-none"
                    placeholder="$500000"
                  />
                  <ErrorMessage
                    name="maxCost"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <label className="font-sans text-base font-semibold text-black">
                Description
              </label>
              <Field
                as="textarea"
                name="description"
                placeholder="Anything you might want to let the customer know about in advance..."
                className="w-full border border-[#E4E3E4] bg-white h-[179px] p-3"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
              <label className="font-sans text-base font-semibold text-black">
                Free Inclusions
              </label>
              <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                {checkData.map((option) => (
                  <label
                    key={option.name}
                    className="flex items-center space-x-2"
                  >
                    <Field
                      type="checkbox"
                      name={`freeInclusions.${option.name}`}
                      className="w-[24px] h-[24px]"
                      style={{ accentColor: "green" }}
                    />
                    <span
                      className={`font-sans font-normal text-[16px] text-black ${
                        option?.name === "campaign" ? "w-[105px]" : ""
                      }`}
                    >
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="w-[30%] flex gap-4">
              <button
                type="button"
                className="w-[149px] h-[44px] border bg-white border-[#FFBF00]  font-sans font-semibold text-[14px] text-[#2C363F] rounded-[4px]"
                onClick={() => {
                  navigate("/bidding-preview", {
                    state: { values },
                  });
                }}
              >
                Preview
              </button>
              <button
                type="submit"
                className="w-[149px] h-[44px] bg-[#FFBF00] font-sans font-semibold text-[14px] text-[#2C363F] rounded-[4px]"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Bidding;
