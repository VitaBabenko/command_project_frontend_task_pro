import React from 'react';
import LogoImage from '../../../../images/logo.svg';
import { SidebarLogo, LogoImg, Text } from './Logo.styled';


export const Logo = ({ goHome }) => (
  <SidebarLogo onClick={goHome}>
    <LogoImg>
      <img src={LogoImage} alt="sidebar logo" />
    </LogoImg>
    <Text>Task Pro</Text>
  </SidebarLogo>
);
