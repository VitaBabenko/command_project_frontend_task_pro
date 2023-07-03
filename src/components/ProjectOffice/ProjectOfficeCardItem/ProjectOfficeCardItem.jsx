import {
  CardActionsStyled,
  CardFooterStyled,
  CardIconsWrapper,
} from '../ProjectOfficeStyle';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  CardStyled,
  CardTitle,
  CardText,
  CardFooterTitle,
  DividerStyled,
  WrapperFooter,
  WrapperText,
  StatusWrapper,
  StatusStyled,
} from './ProjectOfficeCardItem.styled';

import { useState } from 'react';
import { CardPopUp } from 'components/CardPopUp/CardPopUp';

import { dateFormatDedline } from 'utils/dateFormatDedline';
import { deleteTask } from 'taskServices/deleteTask';
import { ProjectOfficePopUpCardColumn } from '../ProjectOfficePopUpCardColumn/ProjectOfficePopUpCardColumn';
import { useSelector } from 'react-redux';
import { selectColumnsForBoard } from 'redux/dashboards/selectors';

const ProjectOfficeCardItem = ({ task, boardId, columnId, setTasks }) => {
  const { _id: taskId, title, description, priority, deadline } = task;

  const columns = useSelector(state => selectColumnsForBoard(state, boardId));

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  const handleTogglePopUp = () => {
    setIsOpenPopUp(prevstate => !prevstate);
  };

  const handleDeleteTask = async () => {
    await deleteTask(boardId, columnId, taskId.toString());
    setTasks(p => {
      return p.filter(task => task._id !== taskId);
    });
  };

  return (
    <>
      <CardStyled key={taskId} priority={priority}>
        <CardActionArea>
          <CardContent>
            <CardTitle component="div">{title}</CardTitle>

            <CardText>{description}</CardText>
          </CardContent>
        </CardActionArea>
        <CardActionsStyled>
          <DividerStyled />
        </CardActionsStyled>
        <CardFooterStyled>
          <CardFooterTitle>Priority</CardFooterTitle>
          <CardFooterTitle>Deadline</CardFooterTitle>
        </CardFooterStyled>

        <WrapperFooter>
          <CardFooterStyled>
            <WrapperText>
              <StatusWrapper>
                <StatusStyled priority={priority} />
                {priority}
              </StatusWrapper>
            </WrapperText>

            <WrapperText>{dateFormatDedline(deadline)}</WrapperText>
          </CardFooterStyled>

          <CardIconsWrapper>
            <NotificationsNoneIcon fontSize="small" sx={{ color: '#888888' }} />

            <Button
              sx={{ padding: 0, width: '20px', minWidth: '0' }}
              onClick={handleTogglePopUp}
            >
              <ArrowCircleRightIcon
                fontSize="small"
                sx={{ color: '#888888' }}
              />
            </Button>
            <Button
              onClick={handleToggleModal}
              sx={{ padding: 0, width: '20px', minWidth: '0' }}
            >
              <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            </Button>
            <Button
              onClick={handleDeleteTask}
              sx={{ padding: 0, width: '20px', minWidth: '0' }}
            >
              <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
            </Button>
          </CardIconsWrapper>
        </WrapperFooter>
      </CardStyled>
      {isOpen && (
        <CardPopUp
          isOpen={isOpen}
          onClose={handleToggleModal}
          columnId={columnId}
          boardId={boardId}
          setTasks={setTasks}
          task={task}
        />
      )}
      {isOpenPopUp && (
        <ProjectOfficePopUpCardColumn
          isOpenPopUp={isOpenPopUp}
          onClose={handleTogglePopUp}
          columns={columns}
          columnId={columnId}
          boardId={boardId}
          setTasks={setTasks}
          task={task}
        />
      )}
    </>
  );
};

export default ProjectOfficeCardItem;
