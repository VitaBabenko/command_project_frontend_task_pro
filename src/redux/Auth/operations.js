import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://taskproapi.onrender.com/api';


const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const registerUser = createAsyncThunk('auth/register', async (userData,thunkAPI) => {
    try {
      const response = await axios.post('auth/register', userData);
      setAuthHeader(response.data.token);
      
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });



export const loginUser = createAsyncThunk(
  'auth',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', userData);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

