import React from 'react';
import { ProjectItem } from './ProjectItem';

export const BoardsList = ({
  projects = [],
}) => {
  return (
    <div className="sidebar-projects-list">
      {projects && projects.map((project) => <ProjectItem {...project} />)}
    </div>
  );
};
