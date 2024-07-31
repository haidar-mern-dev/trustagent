import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/images/bg.png";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const [passwordStrength, setPasswordStrength] = useState("");
  const [type, setType] = useState(false);
  const password = watch("password", "");

  const navigate = useNavigate();
  console.log("Form submitted:", errors);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    navigate("/otp", { state: data });
  };

  useEffect(() => {
    if (password) trigger("password");
  }, [password, trigger]);

  const validatePassword = (value) => {
    console.log("Password value:", value);
    let strength = "Weak";
    let isValid = value.length >= 8;
    if (isValid) {
      strength = "Medium";
    }
    if (value.match(/[0-9]/) || value.match(/[^a-zA-Z0-9]/)) {
      strength = "Strong";
      isValid = isValid && true;
    } else {
      isValid = false;
    }
    setPasswordStrength(strength);
    console.log("Password strength:", strength);
    return isValid;
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
          SIGN UP
        </h3>
        <p className="self-stretch text-[#8C8C8C] text-base font-normal leading-[normal]">
          Provide the following information.
        </p>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${
                errors.fullName ? "border-red-500" : "border-[#E4E3E4]"
              }`}
              {...register("fullName", { required: true })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${
                errors.email ? "border-red-500" : "border-[#E4E3E4]"
              }`}
              {...register("email", { required: true })}
            />
          </div>
          <div className="relative">
            <input
              type={type ? "text" : "password"}
              placeholder="Password"
              name="password"
              className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${
                errors.password ? "border-red-500" : "border-[#E4E3E4]"
              }`}
              {...register("password", {
                required: true,
                validate: validatePassword,
              })}
            />
            <span
              className="absolute right-3 top-5 text-theme_color cursor-pointer"
              onClick={() => setType(!type)}
            >
              {!type ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
            </span>
          </div>
          {password && password.length > 0 && (
            <div className="text-sm mt-2">
              <ul className="list-none list-inside">
                <li
                  className={` my-1  flex items-center gap-2 ${
                    passwordStrength === "Weak"
                      ? "text-red-500"
                      : passwordStrength === "Medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  <span>
                    {" "}
                    {passwordStrength === "Weak" ||
                    passwordStrength === "Medium" ? (
                      <ImCross size={12} />
                    ) : (
                      <FaCheck size={12} />
                    )}
                  </span>{" "}
                  Password strength:{" "}
                  <span className="font-semibold"> {passwordStrength}</span>
                </li>
                <li
                  className={` my-1  flex items-center gap-2 ${
                    password.length >= 8 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <span>
                    {" "}
                    {password.length >= 8 ? (
                      <FaCheck size={12} />
                    ) : (
                      <ImCross size={12} />
                    )}
                  </span>
                  At least 8 characters
                </li>
                <li
                  className={` my-1  flex items-center gap-2 ${
                    password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/)
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <span>
                    {" "}
                    {password.match(/[0-9]/) ||
                    password.match(/[^a-zA-Z0-9]/) ? (
                      <FaCheck size={12} />
                    ) : (
                      <ImCross size={12} />
                    )}
                  </span>{" "}
                  Contains a number or symbol
                </li>
              </ul>
            </div>
          )}
          <button className="w-full py-4 mt-3 bg-theme_color text-white rounded-lg font-semibold">
            REGISTER
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 flex">
            Already have an account? &nbsp;
            <Link to="/signin" className="text-theme_color font-semibold">
              SIGN IN
            </Link>
          </span>
        </div>
      </div>

      <div className="md:my-0 my-10 max-w-sm w-full shrink-0 rounded border border-theme_color bg-light_theme border-solid">
        <h3 className=" h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)]  text-xl font-semibold flex justify-center  items-center  uppercase">
          SIGN UP INFORMATION
        </h3>
        <ul className="custom-list p-6">
          <li className="text-gray-600 my-4">
            We use this information to set up your account.
          </li>
          <li className="text-gray-600 my-4">
            For personal information, we require your name and email.
          </li>
          <li className="text-gray-600 my-4">
            Your data is securely encrypted.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignupForm;
