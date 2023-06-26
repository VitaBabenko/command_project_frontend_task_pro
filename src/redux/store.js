import { configureStore } from '@reduxjs/toolkit';
import modalNameReducer from './modal';
import { authReducer } from './Auth/slice';

const store = configureStore({
  reducer: {
    modal: modalNameReducer,
    auth: authReducer,
  },
});

export default store;
