import React from "react";
import { useSelector } from "react-redux";

const ReviewInfo = () => {
    const formData = useSelector((state) => state.form.formData);
    console.log("sdfwef", formData);
    const ReviewInfoData = [
        {
            label: "Agency Name",
            value: "Lorem Ipsum",
        },
        {
            label: "License Number",
            value: "xxxxxxxxxxxxxx",
        },
        {
            label: "License In Charge (Name)",
            value: "Deven",
        },
        {
            label: "License In Charge (Number)",
            value: "xxxxxxxxxxxxxx",
        },

    ];
    const saleData = [
        {
            label: "Sales Method",
            value: formData?.saleType,
        },
        {
            label: "Expected Price Range",
            value: `$${formData?.minPrice}-$${formData?.maxPrice}`,
        },
        {
            label: "Time Frame to Receive Bids",
            value: `${formData?.startDate}-${formData?.endDate}`,
        },
        {
            label: " Agency Agreement Type",
            value: formData?.agreementType?.label,
        },
    ];
    return (
        <div className="pt-16 flex md:flex-row flex-col md:justify-between">
            <div className="flex flex-col gap-4">
                <p className=" font-sans font-[800] text-[30px] text-[#2C363F]">
                    REVIEW INFORMATION
                </p>
                <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                    Suburb / Area Covered
                </p>
                <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                    xyz street, Perth
                </p>

                <div className="grid  md:grid-cols-2 grid-cols-1 w-full gap-4">
                    {ReviewInfoData?.map((data, index) => (
                        <div className="flex flex-col gap-2" key={index}>
                            <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                                {data?.label}
                            </p>
                            <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                                {data?.value}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                    Photo
                </p>
                <div className="w-[90px] h-[77px] rounded-[2px] border border-[#E4E3E4] bg-black">
                    {/* have to add an image there */}
                </div>

                <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                    Bio
                </p>
                <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="font-sans font-semibold text-[14px] text-[#2C363F]">
                    Links
                </p>
                <p className="font-sans font-medium text-[14px] text-[#8C8C8C]">
                    https//jnxhsxhasxaxnlknxln
                </p>

            </div>

        </div>
    );
};

export default ReviewInfo;
