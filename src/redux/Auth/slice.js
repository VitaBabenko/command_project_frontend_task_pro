import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operestions';

const initialState = {
    loading: false,
    token: null,
    error: null,
    user: null,
  };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.user = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload.data;
          state.token = action.payload.token; 
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.user = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.data;
            state.token = action.payload.token;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
  });
  
  export default authSlice.reducer;