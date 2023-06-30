import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, StyledTitle } from './OfficeItemStyle.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const ProjectOfficeItem = ({ column: { title } }) => {
  console.log(title)
  return (
    <>
        <Wrapper>
        {Array.from(Array(3)).map((_, index) => (
            <ActionsButton key={index}>
            <StyledTitle>{ title }</StyledTitle>
            <ActionsIconsButton>
                <EditIcon fontSize='small' sx={{color: '#888888'}} /> 
                <DeleteOutlineIcon fontSize='small' sx={{color: '#888888'}}  />
            </ActionsIconsButton>
        </ActionsButton>
        ))}
        </Wrapper>
        <ProjectOfficeCardItem />

    </> 
  );
};

export default ProjectOfficeItem;
