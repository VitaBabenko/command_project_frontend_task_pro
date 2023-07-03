import { useDispatch } from 'react-redux';
import {
  Title,
  Container,
  Button,
  //   CustomDialog,
} from './ProjectOfficePopUpCardColumn.styled';
import { changeOwnerTask } from 'taskServices/changeOwnerTask';
import { getColumnsForBoard } from 'redux/dashboards/operation';
import { fetchTasks } from 'taskServices/fetchTask';

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

  return (
    <>
      {/* <CustomDialog open={isOpenPopUp} onClose={handleTogglePopUp}> */}
      <Container>
        <ul>
          {columns.map(column => {
            if (column._id === columnId) {
              return null;
            }
            return (
              <li key={column._id}>
                <Container>
                  <Title>{column.title}</Title>
                  <Button
                    type="button"
                    onClick={() => handleChangeOnerTask(column._id)}
                  >
                    Click me
                  </Button>
                </Container>
              </li>
            );
          })}
        </ul>
      </Container>
      {/* </CustomDialog> */}
    </>
  );
};
