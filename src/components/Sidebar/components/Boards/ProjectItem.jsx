import React from 'react';
// import { ReactComponent as DeleteIcon } from '../../../../images/SVG/delete.svg';
// import { ReactComponent as EditIcon } from '../../../../images/SVG/edit.svg';
// import classNames from 'classnames';

export const ProjectItem = ({
  title,
  id,
  handleDashboardClick,
  // background,
  // dashboardIcon,
}) => {
  // const handleEdit = () => {
  //   console.log('Edit project board');
  // }

  // const handleDelete = () => {
  //   console.log('Delete project board');
  // }

  // const classes = classNames('project-item-main', {
  //   selected: isSelected,
  // })

  return (
    <li onClick={() => handleDashboardClick(id)}>
      <div className="flex-elems">
        {/* {Icon && <div className="icon-wrap"><Icon /></div>} */}
        <p>{title}</p>
      </div>

      {/* {isSelected && (
        <ul className="project-actions-list"> */}
      {/* <li onClick={handleEdit}><EditIcon /></li>
          <li onClick={handleDelete}><DeleteIcon /></li> */}
      {/* </ul> */}
      {/* )} */}
    </li>
  );
};
