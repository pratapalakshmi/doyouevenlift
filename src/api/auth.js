import axios from 'axios';

const API_BASE = 'http://192.168.29.41:5008'; // replace with your backend URL

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_BASE}/login`, {
    email,
    password,
  });
  return response.data.access_token;
};
