import React from 'react';
import LogoImage from '../../../../images/logo.svg';

export const Logo = ({ goHome }) => (
  <div className="sidebar-logo" onClick={goHome}>
    <div className="logo-img">
      <img src={LogoImage} alt="sidebar logo" />
    </div>
    <h3>Task Pro</h3>
  </div>
);
