import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, StyledTitle } from './OfficeItemStyle.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';

import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';
import axios from 'axios';

const ProjectOfficeItem = ({ column: { title, _id: columnId }, boardId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        `/boards/${boardId}/columns/${columnId}/tasks`
      );

      setTasks(data.tasks);
    };
    fetchTasks();
  }, [boardId, columnId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Wrapper>
        <ActionsButton key={Date.now()}>
          <StyledTitle>{title}</StyledTitle>
          <ActionsIconsButton>
            <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
          </ActionsIconsButton>
        </ActionsButton>
      </Wrapper>
      {tasks && tasks.map(task => <ProjectOfficeCardItem task={task} />)}
      <ProjectCardAddButton />
    </div>
  );
};

export default ProjectOfficeItem;
