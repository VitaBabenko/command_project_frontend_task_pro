import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, IconButtonWrapper, StyledTitle } from './OfficeItemStyle.styled';
import { useEffect, useState } from 'react';

import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';

import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import { fetchTasks } from 'taskServices/fetchTask';
import sprite from '../../../images/sprite.svg';
import { ScrollStyled, SvgIconsStyled } from '../ProjectOfficeCardItem/ProjectOfficeCardItem.styled';

const ProjectOfficeItem = ({
  column,
  boardId,
  onDelete,
  handleEditColumnName,
}) => {
  const { title, _id: columnId } = column;

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
  }, [boardId, columnId, column]);

  return (
    <ScrollStyled>
      <Wrapper>
        <ActionsButton key={Date.now()}>
          <StyledTitle>{title}</StyledTitle>
          <ActionsIconsButton>
            <IconButtonWrapper type="button" onClick={handleToggle}>
            <SvgIconsStyled aria-label="close modal select icon" width={16} height={16}>
                <use href={`${sprite}#icon-pencil`}></use>
            </SvgIconsStyled>
            </IconButtonWrapper>
            <IconButtonWrapper type="button" onClick={() => onDelete(boardId, columnId)}>
            <SvgIconsStyled aria-label="close modal select icon" width={16} height={16}>
                <use href={`${sprite}#icon-trash`}></use>
            </SvgIconsStyled>
            </IconButtonWrapper>
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
        <div style={{marginTop: '10px'}}>
        <ProjectCardAddButton
            columnId={columnId}
            boardId={boardId}
            setTasks={setTasks}
        />
        </div>
      <ModalColumn
        isOpen={isOpen}
        onClose={handleToggle}
        type="edit"
        onUpdate={handleUpdate}
      />
    </ScrollStyled>
  );
};

export default ProjectOfficeItem;
