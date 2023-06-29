import React from 'react';
import { ImgWrap, Img, Wrapper } from './HeaderUserInfo.styled';

export const HeaderUserInfo = ({ name, avatarUrl }) => {
  return (
    <Wrapper>
      <p>{name}</p>
      {avatarUrl && (
        <ImgWrap>
          <Img src={avatarUrl} alt="user avatar" />
        </ImgWrap>
      )}
    </Wrapper>
  );
};
