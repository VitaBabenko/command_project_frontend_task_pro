import React, { useState } from 'react';
import { SidebarCreateNew, NewBoardBtn, Title, SvgIcon } from './Board.styled';
import { ModalAddBoard } from 'components/Modal/ModalAddBoard/ModalAddBoard';
// import AddIcon from "@mui/icons-material/Add";
import spriteIcon from 'images/sprite.svg';

export const CreateNewBoard = ({ onCreateNew }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  return (
    <SidebarCreateNew>
      <Title>
        Create a <br /> new board
      </Title>
      <NewBoardBtn onClick={handleToggleModal} type="button">
        {/* <AddIcon /> */}
        <SvgIcon aria-label="icon plus" width="20" height="20">
          <use href={spriteIcon + '#icon-plus'}></use>
        </SvgIcon>
      </NewBoardBtn>
      <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal} />
    </SidebarCreateNew>
  );
};
