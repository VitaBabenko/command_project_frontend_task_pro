import { Wrapper, ActionsIconsButton } from '../ProjectOfficeStyle';
import ProjectOfficeCardItem from '../ProjectOfficeCardItem/ProjectOfficeCardItem';
import { ActionsButton, StyledTitle } from './OfficeItemStyle.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect, useState } from 'react';
import { ModalColumn } from 'components/Modal/ModalColumn/ModalColumn';
import { useDispatch } from 'react-redux';
import { deleteColumn, updateColumn } from 'redux/dashboards/operation';


const ProjectOfficeItem = ({ column: { title, _id }, boardId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEditColumnName = (newName) => { 

    dispatch(updateColumn({ boardId, columnId: _id, title: newName }));
  } 

  const handleDeletecolumn = () => { 
    dispatch(deleteColumn({ boardId, columnId: _id }));

  }




  const handleToggle = () => { 
    setIsOpen(!isOpen);
  } 
  // console.log(_id)
  console.log(title)
  return (
    <>
      <Wrapper>
            <ActionsButton>
            <StyledTitle>{ title }</StyledTitle>
          <ActionsIconsButton>
            <button type='button' onClick={handleToggle}>
              <EditIcon fontSize='small' sx={{ color: '#888888' }} />
            </button>
            <button type='button' onClick={handleDeletecolumn}>
              <DeleteOutlineIcon fontSize='small' sx={{ color: '#888888' }} />
              </button>
            </ActionsIconsButton>
        </ActionsButton>
      </Wrapper>
      <ModalColumn isOpen={isOpen} onClose={handleToggle} type='edit' onUpdate={handleEditColumnName} />
        <ProjectOfficeCardItem />

    </> 
  );
};

export default ProjectOfficeItem;
