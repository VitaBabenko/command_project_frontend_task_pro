import { createSlice } from '@reduxjs/toolkit';
import {
  addColumn,
  addUserBoard,
  deleteUserBoard,
  fetchUserDashboards,
  getColumnsForBoard,
  updateUserBoard,
  updateColumn,
  deleteColumn,
} from './operation';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    dashboards: [],
    tasks: [],
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
        state.dashboards = action.payload.map(board => ({
          ...board,
          columns: [],
        }));
      })
      .addCase(fetchUserDashboards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addUserBoard.pending, state => {
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
      .addCase(updateUserBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const updateBoard = action.payload;
        const index = state.dashboards.findIndex(
          board => board._id === updateBoard._id
        );
        if (index !== -1) {
          state.dashboards[index] = updateBoard;
        }
      })
      .addCase(updateUserBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUserBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteUserBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const deleteBoardId = action.payload;
        const index = state.dashboards.findIndex(
          board => board._id === deleteBoardId
        );
        if (index !== -1) {
          state.dashboards.splice(index, 1);
          state.error = null;
        }
      })
      .addCase(deleteUserBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getColumnsForBoard.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getColumnsForBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        const owner = action.meta.arg;
        const columns = action.payload;
        const targetBoard = state.dashboards.find(board => board._id === owner);
        if (targetBoard) {
          targetBoard.columns = columns;
        }
      })
      .addCase(getColumnsForBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const { owner } = action.payload;
        const newColumn = action.payload;

        const targetBoard = state.dashboards.find(board => board._id === owner);
        if (targetBoard) {
          targetBoard.columns.push(newColumn);
        }
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const editColumn = action.payload;
        const index = state.dashboards.findIndex(
          board => board._id === editColumn.boardId
        );
        if (index !== -1) {
          const columnIndex = state.dashboards[index].columns.findIndex(
            column => column._id === editColumn._id
          );
          if (columnIndex !== -1) {
            state.dashboards[index].columns[columnIndex].title =
              editColumn.title;
          }
        }
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(deleteColumn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { columnId, boardId } = action.payload;
        const targetBoard = state.dashboards.find(
          board => board._id === boardId
        );
        if (targetBoard && targetBoard.columns) {
          targetBoard.columns = targetBoard.columns.filter(
            column => column._id !== columnId
          );
        }
      })

      .addCase(deleteColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = state.payload;
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
