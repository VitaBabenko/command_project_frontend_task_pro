import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, StyledTitle } from './OfficeItemStyle.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';

import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';

import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import { fetchTasks } from 'taskServices/fetchTask';

const ProjectOfficeItem = ({
  column: { title, _id: columnId },
  boardId,
  onDelete,
  handleEditColumnName,
}) => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = newName => {
    console.log(boardId);
    console.log(columnId);
    console.log(newName);
    handleEditColumnName({ boardId, columnId, title: newName });
  };

  useEffect(() => {
    const fetchTasksApi = async (boardId, columnId) => {
      const data = await fetchTasks(boardId, columnId);
      setTasks(data.tasks);
    };
    fetchTasksApi(boardId, columnId);
  }, [boardId, columnId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Wrapper>
        <ActionsButton key={Date.now()}>
          <StyledTitle>{title}</StyledTitle>
          <ActionsIconsButton>
            <button type="button" onClick={handleToggle}>
              <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            </button>
            <button type="button" onClick={() => onDelete(boardId, columnId)}>
              <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
            </button>
          </ActionsIconsButton>
        </ActionsButton>
      </Wrapper>
      {tasks &&
        tasks.map(task => (
          <ProjectOfficeCardItem
            key={task._id}
            task={task}
            columnId={columnId}
            boardId={boardId}
            setTasks={setTasks}
          />
        ))}
      <ProjectCardAddButton
        columnId={columnId}
        boardId={boardId}
        setTasks={setTasks}
      />
      <ModalColumn
        isOpen={isOpen}
        onClose={handleToggle}
        type="edit"
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default ProjectOfficeItem;
