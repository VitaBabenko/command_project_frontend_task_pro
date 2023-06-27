import React from 'react';

export const CreateNewBoard = ({
  onCreateNew
}) => {
  return (
    <div className="sidebar-create-new-board">
      <h3>Create a <br/> new board</h3>
      <div className="new-board-btn" onClick={onCreateNew}>+</div>
    </div>
  );
};
