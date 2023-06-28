import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://taskproapi.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// // Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('auth/register', userData);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', userData);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
     
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateThema = createAsyncThunk(
  'auth/updateThema',
  async (thema, { rejectWithValue }) => {
    try {
      // setAuthHeader(
      //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OThhNjQ4YjIzZTc4OTZhMDY5MTJmYSIsImlhdCI6MTY4Nzg3NTc2MCwiZXhwIjoxNjg3OTU4NTYwfQ.aFl4mScZo_-sC_3DEsXULaICB7gdGqY37BxAcbcbVTQ'
      // );
      const res = await axios.patch('/auth/thema', { thema });

      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
