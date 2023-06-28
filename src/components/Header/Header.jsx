import React from 'react';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { UserInfo } from '../Header/Components/UserInfo/UserInfo';
import { HeaderMain, Inn } from './Components/UserInfo/UserInfoHead.styled';


import AVATAR_URL from '../../images/PNG/avatar.png'

// Remove after implement user data
const MOCK_USER_DATA = {
  name: 'Ivetta',
  avatarUrl: AVATAR_URL
}

export const Header = (props) => {
  return (
    <HeaderMain>
      <Inn>
        <ThemeSelect />

        <UserInfo
          {...MOCK_USER_DATA}
        />
      </Inn>
    </HeaderMain>
  );
};

