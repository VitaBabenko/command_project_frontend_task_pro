import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import modalNameReducer from './modal';
import { authReducer } from './Auth/slice';
import { dashboardReducer } from './dashboards/dashboardsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalNameReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
