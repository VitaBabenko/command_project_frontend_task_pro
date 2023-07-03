import React from 'react';
// import LogoImage from '../../../../images/logo.svg';
import { SidebarLogo, LogoImg, IconLogo, Text } from './Logo.styled';
import spriteIcon from '../../../../images/sprite.svg';

export const Logo = ({ goHome }) => (
  <SidebarLogo onClick={goHome}>
    <LogoImg>
      <IconLogo aria-label="icon logo" width="18" height="20">
        <use href={spriteIcon + '#icon-logo-lightning'}></use>
      </IconLogo>
      {/* <img src={LogoImage} alt="sidebar logo" /> */}
    </LogoImg>
    <Text>Task Pro</Text>
  </SidebarLogo>
);
