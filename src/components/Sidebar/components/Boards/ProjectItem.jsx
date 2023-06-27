import React from 'react';
import { ReactComponent as DeleteIcon } from '../../../../images/SVG/delete.svg';
import { ReactComponent as EditIcon } from '../../../../images/SVG/edit.svg';
import classNames from 'classnames';

export const ProjectItem = ({
  name = '',
  icon: Icon,
  isSelected,
}) => {

  const handleEdit = () => {
    console.log('Edit project board');
  }

  const handleDelete = () => {
    console.log('Delete project board');
  }

  const classes = classNames('project-item-main', {
    selected: isSelected,
  })

  return (
    <div className={classes}>
      <div className="flex-elems">
        {Icon && <div className="icon-wrap"><Icon /></div>}
        <p>{name}</p>
      </div>

      {isSelected && (
        <ul className="project-actions-list">
          <li onClick={handleEdit}><EditIcon /></li>
          <li onClick={handleDelete}><DeleteIcon /></li>
        </ul>
      )}

    </div>
  );
};
