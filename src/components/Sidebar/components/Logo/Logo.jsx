import React from 'react';
import LogoImage from '../../../../images/logo.svg';
import { SidebarLogo, LogoImg } from './Logo.styled';


export const Logo = ({ goHome }) => (
  <SidebarLogo onClick={goHome}>
    <LogoImg>
      <img src={LogoImage} alt="sidebar logo" />
    </LogoImg>
    <h3>Task Pro</h3>
  </SidebarLogo>
);
