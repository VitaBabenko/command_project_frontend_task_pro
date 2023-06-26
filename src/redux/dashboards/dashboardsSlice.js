import { createSlice } from '@reduxjs/toolkit';
import { addColumn, addUserBoard, fetchUserDashboards } from './operation';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboards: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserDashboards.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserDashboards.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.dashboards = action.payload.map(board => ({
          ...board,
          columns: [],
        }));
      })
      .addCase(fetchUserDashboards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(addUserBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUserBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboards.push(action.payload);
      })
      .addCase(addUserBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const { boardId, newColumn } = action.payload;

        const targetBoard = state.dashboards.find(board => board.id === boardId);
        if (targetBoard) {
          targetBoard.columns.push(newColumn);
        };

      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
