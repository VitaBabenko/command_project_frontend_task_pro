import { Wrapper, ActionsIconsButton } from '../Project/ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import {
  ActionsButton,
  ColumnHeight,
  IconButtonWrapper,
  StyledTitle,
} from './OfficeItemStyle.styled';
import { useEffect, useState } from 'react';

import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';

import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import { fetchTasks } from 'taskServices/fetchTask';
import sprite from '../../../images/sprite.svg';
import {
  ScrollStyled,
  SvgIconsStyled,
} from '../ProjectOfficeCardItem/ProjectOfficeCardItem.styled';

import { useSelector } from 'react-redux';

import { Droppable, Draggable } from 'react-beautiful-dnd';

const ProjectOfficeItem = ({
  column,
  boardId,
  onDelete,
  handleEditColumnName,
}) => {
  const { title, _id: columnId } = column;

  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filter = useSelector(state => state.filter);

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

      const filteredTasks = data.tasks.filter(task => {
        if (filter) {
          return task.priority === filter;
        }
        return true;
      });
      setTasks(filteredTasks);
    };
    fetchTasksApi(boardId, columnId);
  }, [boardId, columnId, column, filter]);

  return (
    <ScrollStyled>
      <Wrapper>
        <ActionsButton key={Date.now()}>
          <StyledTitle>{title}</StyledTitle>
          <ActionsIconsButton>
            <IconButtonWrapper type="button" onClick={handleToggle}>
              <SvgIconsStyled
                aria-label="close modal select icon"
                width={16}
                height={16}
              >
                <use href={`${sprite}#icon-pencil`}></use>
              </SvgIconsStyled>
            </IconButtonWrapper>
            <IconButtonWrapper
              type="button"
              onClick={() => onDelete(boardId, columnId)}
            >
              <SvgIconsStyled
                aria-label="close modal select icon"
                width={16}
                height={16}
              >
                <use href={`${sprite}#icon-trash`}></use>
              </SvgIconsStyled>
            </IconButtonWrapper>
          </ActionsIconsButton>
        </ActionsButton>
      </Wrapper>

      {/* <div style={{ overflow: 'auto', maxHeight: '450px' }}> */}
      <Droppable droppableId={columnId} type="task" >
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <ColumnHeight>
              {tasks &&
                tasks.map((task, index) => (
                  <Draggable
            key={task._id}
            draggableId={task._id}
            index={index}
                  >
                    {provided => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                  <ProjectOfficeCardItem
                    key={task._id}
                    task={task}
                    columnId={columnId}
                    boardId={boardId}
                          setTasks={setTasks}
                          index={index}
                        />
                      </div>
                      )}
                </Draggable>
                ))}
            </ColumnHeight>
          </div>)}
        </Droppable>
      {/* </div> */}
      <div style={{ marginTop: '10px' }}>
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
