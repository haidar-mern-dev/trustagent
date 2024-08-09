// src/components/SignInForm.js
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authSlice";
import { notification } from 'antd';
import bg from "../../assets/images/bg.png";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onChange" });
  const [type, setType] = useState(false);
  const password = watch("password", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (password) trigger("password");
  }, [password, trigger]);

  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        notification.success({
          message: 'Login Successful',
          description: 'You have successfully logged in.',
        });
        navigate("/dashboard", { state: data });
      } else if (result.meta.requestStatus === 'rejected') {
        notification.error({
          message: 'Login Failed',
          description: result.payload || 'Login failed due to unknown error.',
        });
      }
    });
  };

  return (
    <div className="min-h-screen flex md:flex-row flex-col md:justify-between justify-center items-center bg-white md:p-20 p-4 main_container bg-cover bg-center">
      <div className="lg:w-[65%] xl:w-[35%] w-full lg:pr-4">
        <h2 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold leading-[normal]">
          Trust Agent
        </h2>
        <h3 className="self-stretch text-[#2C363F] md:text-[28px] text-xl font-extrabold uppercase md:my-4 my-2">
          Sign in
        </h3>
        <p className="self-stretch text-[#8C8C8C] text-base font-normal leading-[normal]">
          Provide the following information.
        </p>
        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password", { required: true })}
            />
            <span
              className="absolute right-3 top-5 text-theme_color cursor-pointer"
              onClick={() => setType(!type)}
            >
              {!type ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
            </span>
          </div>
          <button
            className="w-full py-4 mt-3 bg-theme_color text-custom_gray uppercase rounded-lg font-semibold flex justify-center items-center"
            type="submit"
            disabled={auth.loading} 
          >
            {auth.loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600 flex">
            Don’t have an account? &nbsp;
            <Link to="/" className="text-theme_color font-semibold">
              SIGN UP
            </Link>
          </span>
        </div>
      </div>

      <div className="md:my-0 my-10 max-w-sm w-full shrink-0 rounded border border-theme_color bg-light_theme border-solid">
        <h3 className=" h-[90px] shrink-0 [background:var(--P,#2C363F)] rounded-[4px_4px_0px_0px] text-[color:var(--Primary-Base-White,#FFF)] text-xl font-semibold flex justify-center items-center uppercase">
          Sign in Information
        </h3>
        <ul className="custom-list p-6">
          <li className="text-gray-600 my-4">
            We use this information to access your account.
          </li>
          <li className="text-gray-600 my-4">
            For personal information, please provide your email and password.
          </li>
          <li className="text-gray-600 my-4">Your data is securely encrypted.</li>
        </ul>
      </div>
    </div>
  );
};

export default SignInForm;
