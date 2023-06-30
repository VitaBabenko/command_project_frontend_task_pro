import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/selectors';
import { ImgWrap, Img, Wrapper, Svg } from './HeaderUserInfo.styled';
import sprite from '../../images/sprite.svg';

export const HeaderUserInfo = () => {
  const { name, avatarURL } = useSelector(selectUser);
  return (
    <Wrapper>
      <p>{name}</p>
      <ImgWrap>
        {avatarURL ? (
          <Img src={avatarURL} alt="user avatar" />
        ) : (
          <Svg aria-label="user-default icon">
            <use href={sprite + '#icon-user-default'}></use>
          </Svg>
        )}
      </ImgWrap>
    </Wrapper>
  );
};
