import {
  CardActionsStyled,
  CardFooterStyled,
  CardIconsWrapper,
} from '../ProjectOfficeStyle';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
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
  SvgIconsStyled,
  SvgIconsStyledBell,
} from './ProjectOfficeCardItem.styled';

import { useState } from 'react';
import { CardPopUp } from 'components/CardPopUp/CardPopUp';

import { dateFormatDedline } from 'utils/dateFormatDedline';
import { deleteTask } from 'taskServices/deleteTask';
import sprite from '../../../images/sprite.svg';
import { ProjectOfficePopUpCardColumn } from '../ProjectOfficePopUpCardColumn/ProjectOfficePopUpCardColumn';
import { useSelector } from 'react-redux';
import { selectColumnsForBoard } from 'redux/dashboards/selectors';

const ProjectOfficeCardItem = ({ task, boardId, columnId, setTasks }) => {
  const { _id: taskId, title, description, priority, deadline } = task;
  console.log(deadline)

  const columns = useSelector(state => selectColumnsForBoard(state, boardId));

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);


  const isDeadLine = () => { 
    const currentTime = new Date();
    const deadlineTime = new Date(deadline);

    const timeLeft = deadlineTime.getTime() - currentTime.getTime();
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    return hoursLeft;

    // return hoursLeft < 24;
  }

  const isDeadlineTime = isDeadLine();


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
            
            {isDeadlineTime < 24 && 
              <SvgIconsStyledBell aria-label="icon-bell" width={16} height={16} timeline={isDeadlineTime} >
                <use href={`${sprite}#icon-bell`}></use>
              </SvgIconsStyledBell>}
          
            <Button
              sx={{ padding: 0, width: '20px', minWidth: '0' }}
              onClick={handleTogglePopUp}
            >
            <SvgIconsStyled aria-label="close modal select icon" width={16} height={16}>
                <use href={`${sprite}#icon-arrow-circle-broken-right`}></use>
            </SvgIconsStyled>
            </Button>
            <Button
            onClick={handleToggleModal}
              sx={{ padding: 0, width: '20px', minWidth: '0', '&.MuiButtonBase-root.MuiButton-root:hover': { backgroundColor: '#121212'} }}
            >
            <SvgIconsStyled aria-label="close modal select icon" width={16} height={16}>
                <use href={`${sprite}#icon-pencil`}></use>
            </SvgIconsStyled>
            </Button>
            <Button
              onClick={handleDeleteTask}
              sx={{ padding: 0, width: '20px', minWidth: '0', '&.MuiButtonBase-root.MuiButton-root:hover': { backgroundColor: '#121212'}  }}
            >
            <SvgIconsStyled aria-label="close modal select icon" width={16} height={16}>
                <use href={`${sprite}#icon-trash`}></use>
            </SvgIconsStyled>
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
