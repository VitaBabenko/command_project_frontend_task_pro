import React from 'react';
import { HeaderUserInfo, ImgWrap } from './UserInfoHead.styled';

export const UserInfo = ({ name, avatarUrl }) => {
  return (
    <HeaderUserInfo>
      <p>{name}</p>
      {avatarUrl && (
        <ImgWrap>
          <img src={avatarUrl} alt="user avatar" />
        </ImgWrap>
      )}
    </HeaderUserInfo>
  );
};
