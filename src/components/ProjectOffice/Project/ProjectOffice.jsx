// import { useState } from 'react';

import ProjectOfficeItem from '../ProjectOfficeItem/ProjectOfficeItem';
import { useEffect } from 'react';
// import { getColumns } from 'services/fetchColumn';
import ProjectOfficeHeader from '../ProjectOfficeHeader/ProjectOfficeHeader';
import AddColumnButton from '../AddColumnsButton/AddColumnsButton';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addColumn,
  deleteColumn,
  getColumnsForBoard,
  updateColumn,
} from 'redux/dashboards/operation';
import {
  selectColumnsForBoard,
  selectDashboards,
} from 'redux/dashboards/selectors';
import { Box } from '@mui/material';
import { BackgroundContainer } from '../ProjectOfficeBgContainer.styled';
import { ProjectWrapper } from '../ProjectOfficeItem/OfficeItemStyle.styled';

import { DragDropContext } from 'react-beautiful-dnd';

const ProjectOffice = () => {
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const { boardName } = useParams();
  const columns = useSelector(state => selectColumnsForBoard(state, boardName));
  const dashboards = useSelector(selectDashboards);
  const currentBoard = dashboards.find(board => board._id === boardName);
  const dispatch = useDispatch();

  const handleDeletecolumn = async (boardId, columnId) => {
    await dispatch(deleteColumn({ boardId, columnId }));
    dispatch(getColumnsForBoard(boardName));
  };

  const handleEditColumnName = async ({ boardId, columnId, title }) => {
    await dispatch(updateColumn({ boardId, columnId, title }));
    console.log('UPADATE NAME NEW');
    dispatch(getColumnsForBoard(boardName));
  };

  const handleAddColumn = columnName => {
    dispatch(addColumn({ title: columnName, boardId: boardName }));
  };

  useEffect(() => {
    dispatch(getColumnsForBoard(boardName));
  }, [dispatch, boardName]);

  const handleDragEnd = (result) => {
    // Логіка для перетягування
  };

  return (
    // <Box sx={{ marginLeft: '20%' }}>
    <DragDropContext onDragEnd={handleDragEnd}>
    <BackgroundContainer bgnumber={currentBoard ? currentBoard.background : ''}>
      <Box sx={{ marginLeft: 3 }}>
        <ProjectOfficeHeader boardTitle={currentBoard?.title} />
        <div style={{ display: 'flex' }}>
          <ProjectWrapper>
            {columns &&
              columns.map(column => (
                <ProjectOfficeItem
                  column={column}
                  boardId={boardName}
                  key={column._id}
                  onDelete={handleDeletecolumn}
                  handleEditColumnName={handleEditColumnName}
                />
              ))}
            {!isLoading && (
              <div>
                <AddColumnButton handleAddColumn={handleAddColumn} />
              </div>
            )}
          </ProjectWrapper>
        </div>
      </Box>
      </BackgroundContainer>
      </DragDropContext>
  );
};

export default ProjectOffice;
