import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTllYzUzNDljMTJmMzhiMDYzOGVhNSIsImlhdCI6MTY4NzgxMzMzNiwiZXhwIjoxNjg3ODk2MTM2fQ.WTQSf0CbF6e4zomYmlqDrNVZFK--BdIKBnIydL8lOT4'
// axios.defaults.baseURL = 'https://64975d0e83d4c69925a39dad.mockapi.io';

// axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const fetchUserDashboards = createAsyncThunk(
  'dashboards/fetchUserDashboards',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/boards');
      return resp.data.boards;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const addUserBoard = createAsyncThunk(
  'dashboards/addUserBoard',
  async (board, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/boards', board);
      return resp.data.board;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const updateUserBoard = createAsyncThunk(
  'dashboards/editUserBoard',
  async ({ boardId, board }, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/boards/${boardId}`, board);
      console.log(resp.data);
      return resp.data.board;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const deleteUserBoard = createAsyncThunk(
  'dashboards/deleteUserBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/boards/${boardId}`);
      console.log(resp.data);
      return resp.data.board;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const addColumn = createAsyncThunk(
  'dashboards/createColumn',
  async ({ boardId, title }, { rejectWithValue }) => {
    try {
      const resp = await axios.post(`/boards/${boardId}/columns`, { title });
      console.log(resp);
      return resp.data.column;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const getColumnsForBoard = createAsyncThunk(
  'dashboards/getColumnsForBoard',
  async (boardId, { rejectWithValue }) => {
    try {
      const resp = await axios.get(`/boards/${boardId}/columns`);
      console.log(resp.data);
      return resp.data.columns;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const updateColumn = createAsyncThunk(
  'dashboards/updateColumn',
  async ({ boardId, columnId, title }, { rejectWithValue }) => {
    try {
      const resp = await axios.put(`/boards/${boardId}/columns/${columnId}`, {
        title,
      });
      console.log(resp.data);
      return resp.data.column;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'dashboards/editColumn',
  async ({ boardId, columnId }, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/boards/${boardId}/columns/${columnId}`);
      console.log(resp.data);
      return resp.data.column;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);
