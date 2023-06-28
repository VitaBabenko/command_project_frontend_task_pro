import React from 'react';
import { ProjectItem } from './ProjectItem';
import { SidebarPrjctList } from './Board.styled';


export const BoardsList = ({
  projects = [],
}) => {
  return (
    <SidebarPrjctList>
      {projects && projects.map((project) => <ProjectItem {...project} />)}
    </SidebarPrjctList>
  );
};
