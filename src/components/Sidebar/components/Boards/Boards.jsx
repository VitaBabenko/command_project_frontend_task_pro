import React from 'react';

import { CreateNewBoard } from './CreateNewBoard';
import { BoardsList } from './BoardsList';

import { ReactComponent as ICON_1 } from '../../../../images/SVG/Project.svg'
import { ReactComponent as ICON_2 } from '../../../../images/SVG/icon2.svg'

// Remove after implement boards
const MOCK_BOARDS_LIST = [
  {
    name: 'Project office',
    icon: ICON_1,
    isSelected: true,
  },
  {
    name: 'Neon Light Project',
    icon: ICON_2,
    isSelected: false,
  },
]

export const Boards = ({
  onCreateNew
}) => {
  return (
    <div className="sidebar-boards">
      <div className="inn">

        <span className="title-min">My boards</span>

        <CreateNewBoard
          onCreateNew={onCreateNew}
        />

        <BoardsList
          projects={MOCK_BOARDS_LIST}
        />

      </div>
    </div>
  );
};
