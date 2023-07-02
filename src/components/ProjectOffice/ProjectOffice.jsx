// import { useState } from 'react';

import ProjectOfficeItem from './ProjectOfficeItem/ProjectOfficeItem';
import { useEffect } from 'react';
// import { getColumns } from 'services/fetchColumn';
import ProjectOfficeHeader from './ProjectOfficeHeader/ProjectOfficeHeader';
import AddColumnButton from './AddColumnsButton/AddColumnsButton';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn, getColumnsForBoard } from 'redux/dashboards/operation';
import { selectColumnsForBoard } from 'redux/dashboards/selectors';
import { Box } from '@mui/material';

const ProjectOffice = () => {
  const isLoading = useSelector(state => state.dashboard.isLoading);
  const { boardName } = useParams();
  const columns = useSelector(state => selectColumnsForBoard(state, boardName));

  const dispatch = useDispatch();

  const handleAddColumn = columnName => {
    dispatch(addColumn({ title: columnName, boardId: boardName }));
  };

  useEffect(() => {
    dispatch(getColumnsForBoard(boardName));
  }, [dispatch, boardName]);

  return (
    // <Box sx={{ marginLeft: '20%' }}>
    <Box sx={{ marginLeft: 3 }}>
      <ProjectOfficeHeader />
      {!isLoading && <AddColumnButton handleAddColumn={handleAddColumn} />}
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}> */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {columns ? (
          columns.map(column => (
            <ProjectOfficeItem
              column={column}
              boardId={boardName}
              key={column._id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/* </div> */}
      {/* <ProjectOfficeItem column={columns} /> */}
    </Box>
  );
};

export default ProjectOffice;
