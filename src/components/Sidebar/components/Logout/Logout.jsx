import React from 'react';
import { ReactComponent as LogoutIcon } from '../../../../images/SVG/logout.svg';
import { SidebarLogout, IconWrap } from './Logout.styled';


export const Logout = ({
  onLogout,
}) => {
  return (
    <SidebarLogout onClick={onLogout}>
      <IconWrap><LogoutIcon /></IconWrap>
      <p>Log out</p>
    </SidebarLogout>
  );
};
