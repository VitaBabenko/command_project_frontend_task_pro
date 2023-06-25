import { CardWrapper, CardStyled, CardTitle, CardText, CardActionsStyled, DividerStyled, CardFooterStyled, CardFooterTitle, CardIconsWrapper } from '../ProjectOfficeStyle';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const ProjectOfficeCardItem = () => {
  return (
    <>
        <CardWrapper>
            {Array.from(Array(9)).map((_, index) => (
                <CardStyled key={index}>
                    <CardActionArea>
                        <CardContent>
                            <CardTitle variant="h5" component="div">
                                The Watch Spot Design
                            </CardTitle>
                            <CardText color="text.secondary">
                                Create a visually stunning and eye-catching watch dial design that embodies our brand's...
                            </CardText>
                        </CardContent>
                    </CardActionArea>
                    <CardActionsStyled>
                        <DividerStyled />
                    </CardActionsStyled>
                    <CardFooterStyled>
                        <CardFooterTitle>
                            Priority
                        </CardFooterTitle>
                        <CardFooterTitle>
                            Deadline
                        </CardFooterTitle>
                    </CardFooterStyled>
                    <CardIconsWrapper>
                        <NotificationsNoneIcon fontSize='small' />
                        <ArrowCircleRightIcon fontSize='small' />
                        <EditIcon fontSize='small' />
                        <DeleteOutlineIcon fontSize='small' />
                    </CardIconsWrapper>
                </CardStyled>
            ))}
        </CardWrapper>
    </> 
  );
};

export default ProjectOfficeCardItem;

