import React from 'react';
import { HeaderUserInfo, ImgWrap } from './UserInfoHead.styled';
import { setNameModal } from 'redux/modal';
import { MODAL_EDIT_PROFILE } from 'components/Modal/ModalMapContainer/enums';
import { useDispatch } from 'react-redux';

export const UserInfo = ({ name, avatarUrl }) => {

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setNameModal(MODAL_EDIT_PROFILE));
  }
  return (
    <HeaderUserInfo onClick={toggle}>
      <p>{name}</p>
      {avatarUrl && (
        <ImgWrap>
          <img src={avatarUrl} alt="user avatar" />
        </ImgWrap>
      )}
    </HeaderUserInfo>
  );
};
