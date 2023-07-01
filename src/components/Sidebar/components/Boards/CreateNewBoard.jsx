import React, { useState } from 'react';
import { SidebarCreateNew, NewBoardBtn, Title } from './Board.styled';
import { ModalAddBoard } from 'components/Modal/ModalAddBoard/ModalAddBoard';
import AddIcon from "@mui/icons-material/Add";


export const CreateNewBoard = ({
  onCreateNew
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };


  return (
    <SidebarCreateNew>
      <Title>Create a <br/> new board</Title>
      <NewBoardBtn onClick={handleToggleModal} type='button'>
        <AddIcon />
      </NewBoardBtn>
      <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal}/>
    </SidebarCreateNew>
  );
};
