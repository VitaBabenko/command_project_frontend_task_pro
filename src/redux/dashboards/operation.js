import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64975d0e83d4c69925a39dad.mockapi.io';

export const fetchUserDashboards = createAsyncThunk('dashboards/fethUserDashboards', async (userId, { rejectWithValue }) => { 
    try {
        const resp = axios.get(`/dashboards/${userId}`)
        console.log(resp)
        return resp
    } catch (error) {
        return console.log(error)
    }
});