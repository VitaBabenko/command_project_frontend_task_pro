import { useState } from 'react';

import ProjectOfficeItem from './ProjectOfficeItem';
import { useEffect } from 'react';
import { getColumns } from 'services/fetchColumn';
import ProjectOfficeHeader from './ProjectOfficeHeader/ProjectOfficeHeader';
import AddColumnButton from './AddColumnsButton/AddColumnsButton';

const ProjectOffice = () => {
  const [columns, setColumns] = useState([]);
  const id = '9a5c9bf5-64d7-42dc-9279-d22fde663db5';

  useEffect(() => {
    const getBoardColumn = async () => {
      try {
        const boardColumns = await getColumns(id);
        setColumns(boardColumns);
      } catch (error) {
        console.log(error.message);
      }
    };
    getBoardColumn();
  }, [id]);

  console.log(columns);

  return (
    <>
      <ProjectOfficeHeader />
      <AddColumnButton />
      {columns.map(column => {
        return <ProjectOfficeItem column={column} key={column.id} />;
      })}
      {/* <ProjectOfficeItem column={columns} /> */}
    </>
  );
};

export default ProjectOffice;
