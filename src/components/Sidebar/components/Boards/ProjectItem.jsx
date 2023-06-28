import React from 'react';
import { ReactComponent as DeleteIcon } from '../../../../images/SVG/delete.svg';
import { ReactComponent as EditIcon } from '../../../../images/SVG/edit.svg';
import classNames from 'classnames';
import { FlexElems, IconWrap, PrjctActionList, Text} from './Board.styled';

export const ProjectItem = ({
  title,
  id,
  handleDashboardClick,
  background,
  dashboardIcon,
  icon: Icon,
  isSelected,
}) => {
  const handleEdit = () => {
    console.log('Edit projects board');
  }

  const handleDelete = () => {
    console.log('Delete project board');
  }

  const classes = classNames('project-item-main', {
    selected: isSelected,
  })

  return (
    <div className={classes}>
      <FlexElems>
        {Icon && <IconWrap><Icon /></IconWrap>}
        <Text>{title}</Text>
        </FlexElems>

      {isSelected && (
        <PrjctActionList>
      <li onClick={handleEdit}><EditIcon /></li>
          <li onClick={handleDelete}><DeleteIcon /></li>
      </PrjctActionList> 
      )} 
    </div>
  );
};
