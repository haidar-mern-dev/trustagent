import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordThunk } from '../../redux/userSlice';
import { message } from 'antd';
import { ImCross } from 'react-icons/im';
import { FaCheck } from 'react-icons/fa';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';

const UpdatePasswordForm = () => {
  const [passwordStrength, setPasswordStrength] = useState('');
  const [type, setType] = useState(false); // state for toggling password visibility
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.user);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const password = watch('newPassword');

  const validatePassword = (value) => {
    let strength = 'Weak';
    let isValid = value.length >= 8;
    if (isValid) {
      strength = 'Medium';
    }
    if (value.match(/[0-9]/) || value.match(/[^a-zA-Z0-9]/)) {
      strength = 'Strong';
      isValid = isValid && true;
    } else {
      isValid = false;
    }
    setPasswordStrength(strength);
    return isValid;
  };

  const onSubmit = async (data) => {
    try {
      await dispatch(resetPasswordThunk(data)).unwrap();
      message.success('Password updated successfully');
    } catch (error) {
      message.error('Failed to update password');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-4 w-full flex flex-col gap-6">
      <p className="font-sans font-medium text-base text-[#202020]">Password</p>
      <p className="font-sans font-normal text-[14px] text-[#202020] -mt-1">Password</p>
      
      <div className="md:w-[55%] w-full lg:w-[90%] h-auto rounded-[4px] border border-[#E4E3E4] bg-white flex md:items-start items-center justify-center py-5">
        <div className="p-4 w-full">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          
          <div className="space-y-4 w-full lg:w-3/6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <div className="relative">
                <input
                  type={type ? "text" : "password"}
                  placeholder="Password"
                  {...register("currentPassword", { required: 'Current password is required' })}
                  className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${errors.currentPassword ? "border-red-500" : "border-[#E4E3E4]"}`}
                />
                <span className="absolute right-3 top-5 text-theme_color cursor-pointer" onClick={() => setType(!type)}>
                  {!type ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </span>
              </div>
              {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <div className="relative">
                <input
                  type={type ? "text" : "password"}
                  placeholder="New Password"
                  {...register('newPassword', { validate: validatePassword })}
                  className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${errors.newPassword ? "border-red-500" : "border-[#E4E3E4]"}`}
                />
                <span className="absolute right-3 top-5 text-theme_color cursor-pointer" onClick={() => setType(!type)}>
                  {!type ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </span>
              </div>
              {errors.newPassword && <p className="text-red-500 text-sm mt-1">New password is invalid</p>}
              
              {password && password.length > 0 && (
                <div className="text-sm mt-2">
                  <ul className="list-none list-inside">
                    <li className={`my-1 flex items-center gap-2 ${passwordStrength === 'Weak' ? 'text-red-500' : passwordStrength === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                      <span>
                        {passwordStrength === 'Weak' || passwordStrength === 'Medium' ? <ImCross size={12} /> : <FaCheck size={12} />}
                      </span>
                      Password strength: <span className="font-semibold">{passwordStrength}</span>
                    </li>
                    <li className={`my-1 flex items-center gap-2 ${password.length >= 8 ? 'text-green-500' : 'text-red-500'}`}>
                      <span>
                        {password.length >= 8 ? <FaCheck size={12} /> : <ImCross size={12} />}
                      </span>
                      At least 8 characters
                    </li>
                    <li className={`my-1 flex items-center gap-2 ${password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/) ? 'text-green-500' : 'text-red-500'}`}>
                      <span>
                        {password.match(/[0-9]/) || password.match(/[^a-zA-Z0-9]/) ? <FaCheck size={12} /> : <ImCross size={12} />}
                      </span>
                      Contains a number or symbol
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={type ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) => value === watch('newPassword') || 'Passwords do not match',
                  })}
                  className={`w-full px-3 h-[50px] shrink-0 rounded border bg-transparent border-solid my-2 ${errors.confirmPassword ? "border-red-500" : "border-[#E4E3E4]"}`}
                />
                <span className="absolute right-3 top-5 text-theme_color cursor-pointer" onClick={() => setType(!type)}>
                  {!type ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                </span>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
            </div>
          </div>
          
          <button type="submit" className="bg-spale_sunshine text-custom_gray rounded px-4 py-2" disabled={status === 'loading'}>
            {status === 'loading' ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
