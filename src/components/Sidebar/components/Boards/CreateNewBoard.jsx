import React, { useState } from 'react';
import { SidebarCreateNew, NewBoardBtn, Title } from './Board.styled';
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
      <Title>Create a <br/> new board</Title>
      <NewBoardBtn onClick={handleToggleModal} type='button'>+</NewBoardBtn>
      <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal}/>
    </SidebarCreateNew>
  );
};
