import React from 'react';
import './styles.sass';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
import { UserInfo } from '../Header/Components/UserInfo/UserInfo';

import AVATAR_URL from '../../images/PNG/avatar.png'

// Remove after implement user data
const MOCK_USER_DATA = {
  name: 'Ivetta',
  avatarUrl: AVATAR_URL
}

export const Header = (props) => {
  return (
    <div className="header-main">
      <div className="inn">
        <ThemeSelect />

        <UserInfo
          {...MOCK_USER_DATA}
        />
      </div>
    </div>
  );
};

