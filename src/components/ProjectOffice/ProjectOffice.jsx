// import { useState } from 'react';

import ProjectOfficeItem from './ProjectOfficeItem/ProjectOfficeItem';
import { useEffect } from 'react';
// import { getColumns } from 'services/fetchColumn';
import ProjectOfficeHeader from './ProjectOfficeHeader/ProjectOfficeHeader';
import AddColumnButton from './AddColumnsButton/AddColumnsButton';
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
import { BackgroundContainer } from './ProjectOfficeBgContainer.styled';

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

  return (
    // <Box sx={{ marginLeft: '20%' }}>
    <BackgroundContainer bgnumber={currentBoard ? currentBoard.background : ''}>
      <Box sx={{ marginLeft: 3 }}>
        <ProjectOfficeHeader />
        {!isLoading && <AddColumnButton handleAddColumn={handleAddColumn} />}
        {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {/* {columns ? (
            columns.map(column => (
              <ProjectOfficeItem
                column={column}
                boardId={boardName}
                key={column._id}
                onDelete={handleDeletecolumn}
                handleEditColumnName={handleEditColumnName}
              />
            ))
          ) : (
            <p>Loading...</p>
          )} */}

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
        </div>
        {/* </div> */}
        {/* <ProjectOfficeItem column={columns} /> */}
      </Box>
    </BackgroundContainer>
  );
};

export default ProjectOffice;
