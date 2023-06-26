import { ActionsIconsButton } from '../ProjectOfficeStyle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const ProjectOfficeColumns = () => {
  return (
    <>
        <ActionsIconsButton>
            <EditIcon fontSize='small'  /> 
            <DeleteOutlineIcon fontSize='small' />
        </ActionsIconsButton>
    </> 
  );
};

export default ProjectOfficeColumns;

