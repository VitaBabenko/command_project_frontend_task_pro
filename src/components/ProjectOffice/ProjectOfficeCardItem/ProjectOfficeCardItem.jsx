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
import axios from 'axios';
import { dateFormatDedline } from 'utils/dateFormatDedline';

const ProjectOfficeCardItem = ({ task, boardId, columnId, setTasks }) => {
  const { _id: taskId, title, description, priority, deadline } = task;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  const handleDeleteTask = async () => {
    try {
      await axios.delete(
        `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
      );
      setTasks(p => {
        return p.filter(task => task._id !== taskId);
      });
    } catch (e) {
      console.log('e.message', e.message);
    }
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
            {/* <WrapperText>{date}</WrapperText> */}
          </CardFooterStyled>

          <CardIconsWrapper>
            <NotificationsNoneIcon fontSize="small" sx={{ color: '#888888' }} />

            <Button sx={{ padding: 0, width: '20px', minWidth: '0' }}>
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
    </>
  );
};

export default ProjectOfficeCardItem;

// import {
//   CardActionsStyled,
//   CardFooterStyled,
//   CardIconsWrapper,
// } from '../ProjectOfficeStyle';
// import CardContent from '@mui/material/CardContent';
// import { Button, CardActionArea } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import {
//   CardStyled,
//   CardTitle,
//   CardText,
//   CardFooterTitle,
//   DividerStyled,
//   WrapperFooter,
//   WrapperText,
//   StatusWrapper,
//   StatusStyled,
// } from './ProjectOfficeCardItem.styled';

// import { useState } from 'react';
// import { CardPopUp } from 'components/CardPopUp/CardPopUp';

// const ProjectOfficeCardItem = ({ task }) => {
//   const { _id, title, description, priority, deadline } = task;

//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggleModal = () => {
//     setIsOpen(prevstate => !prevstate);
//   };

//   return (
//     <>
//       <CardStyled>
//         <CardActionArea>
//           <CardContent>
//             <CardTitle>{title}</CardTitle>

//             <CardText>{description}</CardText>
//           </CardContent>
//         </CardActionArea>
//         <CardActionsStyled component={'div'}>
//           <DividerStyled />
//         </CardActionsStyled>
//         <CardFooterStyled>
//           <CardFooterTitle>Priority</CardFooterTitle>
//           <CardFooterTitle>Deadline</CardFooterTitle>
//         </CardFooterStyled>

//         <WrapperFooter>
//           <CardFooterStyled>
//             <WrapperText>
//               <StatusWrapper>
//                 <StatusStyled />
//                 {priority}
//               </StatusWrapper>
//             </WrapperText>

//             <WrapperText>{deadline}</WrapperText>
//           </CardFooterStyled>

//           <CardIconsWrapper>
//             <NotificationsNoneIcon fontSize="small" sx={{ color: '#888888' }} />
//             <ArrowCircleRightIcon fontSize="small" sx={{ color: '#888888' }} />
//             <Button onClick={handleToggleModal}>
//               <EditIcon fontSize="small" sx={{ color: '#888888' }} />
//             </Button>

//             <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
//           </CardIconsWrapper>
//         </WrapperFooter>
//       </CardStyled>
//       {isOpen && <CardPopUp isOpen={isOpen} onClose={handleToggleModal} />}
//     </>
//   );
// };

// export default ProjectOfficeCardItem;
