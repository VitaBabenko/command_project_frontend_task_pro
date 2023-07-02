import {
  // CardWrapper,
  CardActionsStyled,
  CardFooterStyled,
  CardIconsWrapper,
} from '../ProjectOfficeStyle';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
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
// import ProjectCardAddButton from '../ProjectCardAddButton/ProjectCardAddButton';

const ProjectOfficeCardItem = ({ task }) => {
  const { _id, title, description, priority, deadline } = task;
  return (
    <>
      {/* <CardWrapper> */}
      {/* {Array.from(Array(1)).map((_, index) => ( */}
      {/* {task.map(({ _id, title, description, priority, deadline }) => ( */}
      <CardStyled key={_id}>
        <CardActionArea>
          <CardContent>
            {/* <CardTitle component="div">The Watch Spot Design</CardTitle> */}
            <CardTitle component="div">{title}</CardTitle>
            {/* <CardText>
                  Create a visually stunning and eye-catching watch dial design
                  that embodies our brand's
                </CardText> */}
            <CardText>{description}</CardText>
          </CardContent>
        </CardActionArea>
        <CardActionsStyled>
          <DividerStyled />
        </CardActionsStyled>
        <CardFooterStyled>
          {/* <CardFooterTitle>{priority}</CardFooterTitle> */}
          {/* <CardFooterTitle>{deadline}</CardFooterTitle> */}
          <CardFooterTitle>Priority</CardFooterTitle>
          <CardFooterTitle>Deadline</CardFooterTitle>
        </CardFooterStyled>

        <WrapperFooter>
          <CardFooterStyled>
            <WrapperText>
              <StatusWrapper>
                <StatusStyled />
                {priority}
              </StatusWrapper>
              {/* <StatusStyled />
                  Low
                </StatusWrapper> */}
            </WrapperText>
            {/* <WrapperText>12/05/2023</WrapperText> */}
            <WrapperText>{deadline}</WrapperText>
          </CardFooterStyled>

          <CardIconsWrapper>
            <NotificationsNoneIcon fontSize="small" sx={{ color: '#888888' }} />
            <ArrowCircleRightIcon fontSize="small" sx={{ color: '#888888' }} />
            <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
          </CardIconsWrapper>
        </WrapperFooter>
      </CardStyled>
      {/* ))} */}
      {/* </CardWrapper> */}
      {/* <ProjectCardAddButton /> */}
    </>
  );
};

export default ProjectOfficeCardItem;
