import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        dashboards: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
    }

});