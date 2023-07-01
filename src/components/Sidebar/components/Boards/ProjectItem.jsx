import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as DeleteIcon } from '../../../../images/SVG/delete.svg';
// import { ReactComponent as EditIcon } from '../../../../images/SVG/edit.svg';
// import classNames from 'classnames';
import {
  EditDelBtn,
  FlexElems,
  IconServBtn,
  LinkWrapper,
  ListIcon,
  PrjctActionList,
  Text,
} from './Board.styled';
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

  const handleUpdateBoard = data => {
    onUpdate(id, data);
  };

  // const classes = classNames('project-item-main', {
  //   selected: isSelected,
  // });

  return (
    <LinkWrapper className={isActive ? 'active' : ''}>
      <NavLink to={id}>
        <FlexElems onClick={handleClick}>
          <ListIcon>
            <use href={sprite + dashboardIcon} />
          </ListIcon>
          <Text>{title}</Text>
        </FlexElems>
      </NavLink>

      {isActive && (
        <PrjctActionList>
          <li onClick={handleEdit}>
            <EditDelBtn type="button" onClick={handleToggleModal}>
              <IconServBtn width={16} height={16}>
                <use href={sprite + '#icon-pencil'} />
              </IconServBtn>
            </EditDelBtn>
            <ModalAddBoard
              isOpen={isOpen}
              onClose={handleToggleModal}
              type="edit"
              handleUpdateBoard={handleUpdateBoard}
            />
          </li>
          <li>
            <EditDelBtn type="button" onClick={() => onDelete(id)}>
              <IconServBtn width={16} height={16}>
                <use href={sprite + '#icon-trash'} />
              </IconServBtn>
            </EditDelBtn>
          </li>
        </PrjctActionList>
      )}
    </LinkWrapper>
  );
};
