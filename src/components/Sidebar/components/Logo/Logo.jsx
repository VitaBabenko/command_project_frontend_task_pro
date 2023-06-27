import React from 'react';
import LogoImage from '../../../../images/logo.svg';

export const Logo = ({goHome}) => (
  <div className="sidebar-logo" onCLick={goHome}>
    <div className="logo-img">
      <img src={LogoImage}/>
    </div>
    <h3>Task Pro</h3>
  </div>
);
