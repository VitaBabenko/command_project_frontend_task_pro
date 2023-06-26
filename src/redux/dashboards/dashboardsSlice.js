// import { createSlice } from '@reduxjs/toolkit';

// const dashboardSlice = createSlice({
//     name: 'dashboard',
//     initialState: {
//         dashboards: [],
//         isLoading: false,
//         error: null,
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchUserDashboards.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchUserDashboards.fulfilled, (state, action) => {
//           state.isLoading = false;
//           console.log(action.payload)
//         state.dashboards = action.payload;
//       })
//       .addCase(fetchUserDashboards.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//     }

// });
