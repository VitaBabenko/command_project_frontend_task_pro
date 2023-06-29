import React from 'react';
import ThemeSelect from '../ThemeSelect/ThemeSelect';
// import { UserInfo } from '../Header/Components/UserInfo/UserInfo';
import { HeaderMain } from './Header.styled';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/selectors';

import DEFAULT_AVATAR_URL from '../../images/PNG/avatar.png';
import { HeaderUserInfo } from 'components/HeaderUserInfo/HeaderUserInfo';
// import { HeaderUserInfo } from 'components/HeaderUserInfo/HeaderUserInfo.styled';

// Remove after implement user data
// const MOCK_USER_DATA = {
//   name: 'Ivetta',
//   avatarUrl: AVATAR_URL,
// };

export const Header = () => {
  const isUserLogin = useSelector(selectUser);
  console.log('isUserLogin: ', isUserLogin);

  const currentUserName = isUserLogin.name || '';
  const currentUserAvatar = isUserLogin.avatarURL || DEFAULT_AVATAR_URL;

  return (
    <HeaderMain>
      <ThemeSelect />
      <HeaderUserInfo name={currentUserName} avatarUrl={currentUserAvatar} />
    </HeaderMain>
  );
};
