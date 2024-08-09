// src/api.js
import config from './config';

const apiBaseUrl = config.apiBaseUrl;

const request = async (endpoint, method = 'GET', data = null) => {
  const url = `${apiBaseUrl}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
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
  return await request('auth/signup', 'POST', { name, email, password,"role": "Agency" });
};
