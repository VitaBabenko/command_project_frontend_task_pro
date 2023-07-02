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

const ProjectOfficeCardItem = ({ task }) => {
  const { _id, title, description, priority, deadline } = task;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  return (
    <>
      <CardStyled key={_id}>
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
                <StatusStyled />
                {priority}
              </StatusWrapper>
            </WrapperText>

            <WrapperText>{deadline}</WrapperText>
          </CardFooterStyled>

          <CardIconsWrapper>
            <NotificationsNoneIcon fontSize="small" sx={{ color: '#888888' }} />
            <ArrowCircleRightIcon fontSize="small" sx={{ color: '#888888' }} />
            <Button onClick={handleToggleModal}>
              <EditIcon fontSize="small" sx={{ color: '#888888' }} />
            </Button>

            <DeleteOutlineIcon fontSize="small" sx={{ color: '#888888' }} />
          </CardIconsWrapper>
        </WrapperFooter>
      </CardStyled>
      {isOpen && <CardPopUp isOpen={isOpen} onClose={handleToggleModal} />}
    </>
  );
};

export default ProjectOfficeCardItem;
