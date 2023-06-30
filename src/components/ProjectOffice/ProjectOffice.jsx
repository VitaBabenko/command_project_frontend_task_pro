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
  const { boardName } = useParams();
  const columns = useSelector(state => selectColumnsForBoard(state, boardName));

  const dispatch = useDispatch();

  const handleAddColumn = columnName => {
    dispatch(addColumn({ title: columnName, boardId: boardName }));
  };

  useEffect(() => {
    dispatch(getColumnsForBoard(boardName));
  }, [dispatch, boardName]);

  console.log(columns);

  return (
    <Box sx={{marginLeft: '20%'}}>
      <ProjectOfficeHeader />
      {columns.length < 0 &&
        <AddColumnButton handleAddColumn={handleAddColumn} />
      }
      {columns.length > 0 &&
        columns.map(column => {
          return <ProjectOfficeItem column={column} key={column._id} />;
        })}
      {/* <ProjectOfficeItem column={columns} /> */}
    </Box>
  );
};

export default ProjectOffice;
