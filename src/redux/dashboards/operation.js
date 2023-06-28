import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0O…TI5fQ.TO3VD5hM-Qa-Aruzghnua71_dWVOVJ0MHmkWLkWWDxo'
// axios.defaults.baseURL = 'https://64975d0e83d4c69925a39dad.mockapi.io';

// axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const fetchUserDashboards = createAsyncThunk('dashboards/fethUserDashboards', async (_, { rejectWithValue }) => { 
    try {
        const resp = await axios.get('/boards')
        // console.log(resp)
        return resp.data
    } catch (error) {
        return console.log(error)
    }
});

export const addUserBoard = createAsyncThunk('dashboards/addUserBoard', async (board, { rejectWithValue }) => { 
    try {
        const resp = await axios.post('/boards', board);
        console.log(resp)
        return resp.data
    } catch (error) {
       return console.log(error) 
    }
});

export const addColumn = createAsyncThunk('dashboards/createColumn', async ({ boardId, columnName }, { rejectWithValue }) => { 
    try {
        const resp = await axios.post(`/boards/${boardId}/columns`, columnName);
        console.log(resp)
        return resp.data
    } catch (error) {
        return console.log(error);   
    }
})
