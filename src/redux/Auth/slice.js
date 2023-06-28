import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logOut, registerUser, updateThema } from './operations';

const initialState = {
  user: { name: null, email: null, thema: 'dark' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
 

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        .addCase(logOut.fulfilled, (state) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        })
        // .addCase(refreshUser.pending, (state) => {
        //   state.isRefreshing = true;
        // })
        // .addCase(refreshUser.fulfilled, (state, action) => {
        //   state.user = action.payload;
        //   state.isLoggedIn = true;
        //   state.isRefreshing = false;
        // })
        // .addCase(refreshUser.rejected, (state) => {
        //   state.isRefreshing = false;
        // });
        .addCase(updateThema.pending, state => {
          // console.log('pending');
          state.loading = true;
          state.error = null;
        })
        .addCase(updateThema.fulfilled, (state, { payload }) => {
          // console.log('fulfilled');
          state.loading = false;
          state.user.thema = payload.thema;
        })
        .addCase(updateThema.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const authReducer = authSlice.reducer;