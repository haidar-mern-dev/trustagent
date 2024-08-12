import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfileThunk } from "../../redux/userSlice"; 
import { notification, Spin } from 'antd'; 

const PersonalDetailsForm = () => {
  // Get user profile data from Redux store
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  // Local state for loading
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: profile?.user?.name || '',
      email: profile?.user?.email || '',
    },
  });

  // Handle form submission
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const resultAction = await dispatch(updateUserProfileThunk(data)).unwrap();
      notification.success({
        message: 'Profile Updated Successfully',
        description: 'Your profile has been updated successfully.',
      });
    } catch (error) {
      notification.error({
        message: 'Profile Update Failed',
        description: error.message || 'An error occurred while updating your profile.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white border rounded p-4 w-full">
        <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-spale_sunshine text-custom_gray rounded px-4 py-2 mt-4 max-w-max"
            disabled={loading} // Disable button while loading
          >
            {loading ?<svg
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
              </svg> : 'Save'} {/* Show loader when loading */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
