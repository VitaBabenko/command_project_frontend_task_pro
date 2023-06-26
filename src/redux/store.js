import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import modalNameReducer from './modal';
import { authReducer } from './Auth/slice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalNameReducer,
    auth: authReducer,
  },
});

export default store;
