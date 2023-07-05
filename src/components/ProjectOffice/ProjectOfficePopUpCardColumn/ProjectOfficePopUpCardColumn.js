import { useDispatch } from 'react-redux';
import {
  Title,
  Container,
  Button,
  List,
  ListItem,
  SvgIcons,

  //   CustomDialog,
} from './ProjectOfficePopUpCardColumn.styled';
import { changeOwnerTask } from 'taskServices/changeOwnerTask';
import { getColumnsForBoard } from 'redux/dashboards/operation';
import { fetchTasks } from 'taskServices/fetchTask';

import sprite from '../../../images/sprite.svg';

export const ProjectOfficePopUpCardColumn = ({
  columns,
  isOpenPopUp,
  handleTogglePopUp,
  task,
  columnId,
  boardId,
  setTasks,
}) => {
  const dispatch = useDispatch();

  const handleChangeOnerTask = async newOwner => {
    const { deadline, description, priority, title } = task;
    await changeOwnerTask(boardId, columnId, task._id.toString(), {
      deadline,
      description,
      priority,
      title,
      owner: newOwner,
    });

    await dispatch(getColumnsForBoard(boardId));
    const { tasks } = await fetchTasks(boardId, columnId);
    setTasks(tasks);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <>
      <Container>
        <List>
          {columns.map(column => {
            if (column._id === columnId) {
              return null;
            }
            return (
              <ListItem key={column._id}>
                <Button
                  type="button"
                  onClick={() => handleChangeOnerTask(column._id)}
                >
                  <Title>{truncateText(column.title, 10)}</Title>
                  <SvgIcons aria-label="arrow icon" width={16} height={16}>
                    <use
                      href={`${sprite}#icon-arrow-circle-broken-right`}
                    ></use>
                  </SvgIcons>
                </Button>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </>
  );
};
