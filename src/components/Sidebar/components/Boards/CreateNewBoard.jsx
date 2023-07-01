import React, { useState } from 'react';
import { SidebarCreateNew, NewBoardBtn } from './Board.styled';
import { ModalAddBoard } from 'components/Modal/ModalAddBoard/ModalAddBoard';


export const CreateNewBoard = ({
  onCreateNew
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };


  return (
    <SidebarCreateNew>
      <h3>Create a <br/> new board</h3>
      <NewBoardBtn onClick={handleToggleModal} type='button'>+</NewBoardBtn>
      <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal}/>
    </SidebarCreateNew>
  );
};
