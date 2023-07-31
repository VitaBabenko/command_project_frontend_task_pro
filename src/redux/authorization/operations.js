import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      if (error.response) {
        if (error.response.status === 400) {
          toast.error('Такий користувач вже зареєстрований');
        } else {
          toast.error('Сталася помилка при реєстрації');
        }
      }
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
      if (error.response) {
        if (error.response.status === 401) {
          toast.error('Логін або пароль не вірні');
        } else {
          toast.error('Сталася помилка сервера');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateThema = createAsyncThunk(
  'auth/updateThema',
  async (thema, { rejectWithValue }) => {
    try {
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

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/user',
  async (userData, thunkAPI) => {
    try {
      const res = await axios.put('/auth/user', userData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.user.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const technicalSupportRequest = async (userData, callback) => {
  callback({ isFetching: true, init: false, data: null, error: null });
  try {
    const response = await axios.post('/auth/support', userData, {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    callback({
      isFetching: false,
      init: true,
      data: response.data.message,
      error: false,
    });
  } catch (error) {
    callback({
      isFetching: false,
      init: true,
      data: null,
      error: error.message,
    });
  }
};

export const wakeUpServer = createAsyncThunk(
  'auth/wakeUpServer',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/wakeupserver');

      return true;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
