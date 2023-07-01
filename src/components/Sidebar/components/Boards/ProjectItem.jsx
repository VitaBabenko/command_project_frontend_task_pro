import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../../../images/SVG/delete.svg';
import { ReactComponent as EditIcon } from '../../../../images/SVG/edit.svg';
// import classNames from 'classnames';
import { FlexElems, IconWrap, PrjctActionList, Text } from './Board.styled';
import sprite from '../../../../images/sprite.svg';
import { ModalAddBoard } from 'components/Modal/ModalAddBoard/ModalAddBoard';

export const ProjectItem = ({
  title,
  id,
  background,
  dashboardIcon,
  icon: Icon,
  onUpdate,
  activeBoardId,
  setActiveBoardId,
  onDelete,
}) => {
  const isActive = activeBoardId === id;
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggleModal = () => {
    setIsOpen(prevstate => !prevstate);
  };

  const handleClick = () => {
    setActiveBoardId(id);
  };


  const handleEdit = () => {
    console.log('Edit projects board');
  };

 
  const handleUpdateBoard = (data) => {
    onUpdate(id, data);
  }

  // const classes = classNames('project-item-main', {
  //   selected: isSelected,
  // });

  return (
    <div className={isActive ? 'active' : ''}>
      <NavLink to={id}>
        <FlexElems  onClick={handleClick}>
          <svg width={18} height={18} stroke="rgba(255, 255, 255, 0.5)">
            <use href={sprite + dashboardIcon} />
          </svg>
          <Text>{title}</Text>
        </FlexElems>
      </NavLink>

      {isActive && (
        <PrjctActionList>
          <li onClick={handleEdit}>
            <button type='button' onClick={handleToggleModal}>
              <EditIcon />
            </button>
            <ModalAddBoard isOpen={isOpen} onClose={handleToggleModal} type='edit' handleUpdateBoard={handleUpdateBoard} />
          </li>
          <li >
            <button type='button' onClick={() => onDelete(id)}>
              <DeleteIcon />
              </button>
          </li>
        </PrjctActionList>
      )}
    </div>
  );
};
