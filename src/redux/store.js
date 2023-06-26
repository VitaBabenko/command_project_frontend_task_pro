import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import modalNameReducer from './modal';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalNameReducer
  },
});

export default store;
