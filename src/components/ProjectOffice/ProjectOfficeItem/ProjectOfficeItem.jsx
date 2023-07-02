import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, StyledTitle } from './OfficeItemStyle.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';

import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';

const ProjectOfficeItem = ({ column: { title, _id: columnId }, boardId, onDelete, handleEditColumnName }) => {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  // const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };




  const handleUpdate = newName => {
    console.log(boardId)
    console.log(columnId)
    console.log(newName)
    handleEditColumnName({ boardId, columnId, title: newName });
  };


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
            <button type="button" onClick={handleToggle}>
              <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            </button>
            <button type='button' onClick={() => onDelete(boardId, columnId)}>
              <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
              </button>
          </ActionsIconsButton>
        </ActionsButton>
      </Wrapper>
      {tasks && tasks.map(task => <ProjectOfficeCardItem task={task} />)}
      <ProjectCardAddButton />
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
