import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/selectors';
import { ImgWrap, Img, Wrapper, Svg } from './HeaderUserInfo.styled';
import sprite from '../../images/sprite.svg';
import { setNameModal } from 'redux/modal';
import { MODAL_EDIT_PROFILE } from 'components/Modal/ModalMapContainer/enums';

export const HeaderUserInfo = () => {
  const { name, avatar } = useSelector(selectUser);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setNameModal(MODAL_EDIT_PROFILE));
  };

  return (
    <Wrapper>
      <p>{name}</p>
      <ImgWrap onClick={toggle}>
        {avatar ? (
          <Img src={avatar} alt="user avatar" />
        ) : (
          <Svg aria-label="user-default icon">
            <use href={sprite + '#icon-user-default'}></use>
          </Svg>
        )}
      </ImgWrap>
    </Wrapper>
  );
};
