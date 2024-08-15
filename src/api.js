import config from './config';

const apiBaseUrl = config.apiBaseUrl;
const token= localStorage.getItem("token");
const request = async (endpoint, method = 'GET', data = null, authRequired = false) => {
  const url = `${apiBaseUrl}${endpoint}`;

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (authRequired) {
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  return await request('auth/login', 'POST', { email, password });
};

export const signup = async (name, email, password) => {
  return await request('auth/signup', 'POST', { name, email, password, "role": "Agency" });
};

export const getUserProfile = async () => {
  return await request('auth/profile', 'GET', null, true); 
};
export const updateUserProfile = async (data) => {
  return await request('auth/updateProfile', 'PATCH',data, true); 
};
export const resetPassowrd = async (data) => {
  return await request('auth/resetPassword', 'POST',data, true); 
};
export const getProperties = async () => {
  return await request('property', 'GET',null, false); 
};
export const getPropertById = async (id) => {
  return await request(`property/${id}`, 'GET',null, false); 
};
export const getBidsByProperty = async () => {
  return await request(`property/bids`, 'GET',null, true); 
};
export const getPropertyCount = async () => {
  return await request(`property/count`, 'GET',null, true); 
};
export const comparedBids = async (id) => {
  return await request(`bid/${id}/compare`, 'PATCH',null, true); 
};