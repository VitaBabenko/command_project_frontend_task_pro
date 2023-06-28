import React from 'react';
import { SidebarCreateNew, NewBoardBtn } from './Board.styled';


export const CreateNewBoard = ({
  onCreateNew
}) => {
  return (
    <SidebarCreateNew>
      <h3>Create a <br/> new board</h3>
      <NewBoardBtn onClick={onCreateNew} type='button'>+</NewBoardBtn>
    </SidebarCreateNew>
  );
};
