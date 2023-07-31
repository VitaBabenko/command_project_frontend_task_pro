import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  logOut,
  refreshUser,
  updateUser,
  updateThema,
  wakeUpServer,
} from './operations';

const initialState = {
  user: { name: null, email: null, thema: 'dark', avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isServerSleeping: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetUpdateUserInfo: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.init = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { email, name, thema, avatarURL } = action.payload.user;
        state.user.name = name;
        state.user.email = email;
        state.user.thema = thema;
        state.user.avatar = avatarURL;
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
        const { email, name, thema, avatarURL } = action.payload.user;
        state.user.name = name;
        state.user.email = email;
        state.user.thema = thema;
        state.user.avatar = avatarURL;
        state.isLoggedIn = true;
        state.isRefreshing = false;
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
      })
      .addCase(updateUser.pending, state => {
        state.loading = true;
        state.error = null;
        state.init = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const { email, name, thema, avatarURL, token } = action.payload.user;
        state.user.name = name;
        state.user.email = email;
        state.user.thema = thema;
        state.user.avatar = avatarURL;
        state.token = token;
        state.loading = false;
        state.init = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.init = true;
      })
      .addCase(wakeUpServer.pending, state => {
        state.loading = true;
        state.error = null;
        state.isServerSleeping = true;
      })
      .addCase(wakeUpServer.fulfilled, state => {
        state.loading = false;
        state.isServerSleeping = false;
      })
      .addCase(wakeUpServer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isServerSleeping = false;
      });
  },
});

export const { resetUpdateUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
