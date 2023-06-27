import React from 'react';
import { ReactComponent as LogoutIcon } from '../../../../images/SVG/logout.svg';

export const Logout = ({
  onLogout,
}) => {
  return (
    <div className="sidebar-logout" onClick={onLogout}>
      <div className="icon-wrap"><LogoutIcon /></div>
      <p>Log out</p>
    </div>
  );
};
