import { configureStore } from '@reduxjs/toolkit';
import modalNameReducer from './modal';
import { authReducer } from './Auth/slice';
import { dashboardReducer } from './dashboards/dashboardsSlice';

const store = configureStore({
  reducer: {
    modal: modalNameReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
