import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logOut,
  refreshUser,
  registerUser,
  updateThema,
} from './operations';

const initialState = {
  user: { name: null, email: null, thema: 'dark', avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
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
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.user.thema = action.payload.user.thema;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })

      .addCase(updateThema.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateThema.fulfilled, (state, { payload }) => {
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