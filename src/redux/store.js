import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import {authReducer} from './Auth/slice'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});

export default store;
