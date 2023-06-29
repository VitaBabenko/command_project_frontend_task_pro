import React from 'react';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { HeaderMain } from './Header.styled';

import { HeaderUserInfo } from 'components/HeaderUserInfo/HeaderUserInfo';

export const Header = () => {
  return (
    <HeaderMain>
      <div className="header-burger" onClick={onBurgerClick}>
        <BurgerIcon />
      </div>

      <ThemeSelect />
      <HeaderUserInfo />
    </HeaderMain>
  );
};
