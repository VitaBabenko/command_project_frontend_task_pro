import { createSlice } from '@reduxjs/toolkit';
import { addColumn, addUserBoard, deleteUserBoard, fetchUserDashboards, getColumnsForBoard, updateUserBoard } from './operation';

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
        // console.log(action.payload);
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
      }).addCase(updateUserBoard.pending, state => { 
        state.isLoading = true;
        state.error = null;
      }).addCase(updateUserBoard.fulfilled, (state, action) => { 
        state.isLoading = false;
        console.log(action.payload);
        const updateBoard = action.payload;
        const index = state.dashboards.findIndex(board => board._id === updateBoard._id);
        if (index !== -1) { 
          state.dashboards[index] = updateBoard;
        }
      }).addCase(updateUserBoard.rejected, (state, action) => { 
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(deleteUserBoard.pending, state => { 
        state.isLoading = true;
        state.error = null;
      }).addCase(deleteUserBoard.fulfilled, (state, action) => { 
        state.isLoading = false;
        const deleteBoardId = action.payload;
        const index = state.dashboards.findIndex(board => board._id === deleteBoardId);
        if (index !== -1) { 
          state.dashboards.splice(index, 1);
          state.error = null;
        }
      }).addCase(deleteUserBoard.rejected, (state, action) => { 
        state.isLoading = false;
        state.error = action.error.message;
      }).addCase(getColumnsForBoard.pending, state => { 
        state.isLoading = true;
        state.error = null;
      }).addCase(getColumnsForBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const owner  = action.meta.arg;
        console.log(owner)
        const columns = action.payload;
        console.log(columns)
        const targetBoard = state.dashboards.find(board => board._id === owner);
        if (targetBoard) {
          targetBoard.columns = columns;
        }
      }).addCase(getColumnsForBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        const { owner } = action.payload;
        console.log(owner)
        const newColumn = action.payload;
        console.log(newColumn)

        const targetBoard = state.dashboards.find(board => board._id === owner);
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
