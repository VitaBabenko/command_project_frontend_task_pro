import React, { useRef } from 'react';
import sprite from '../../images/sprite.svg';
import { BgChange } from './BgChange/BgChange';
import { Filter } from './Filter/Filter';
import {
  ModalContainer,
  ModalHeader,
  CloseButton,
  SvgIcons,
  Wraper,
} from './PopUpFilter.styled';

export const PopUpFilter = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <Wraper onClick={handleClickOutside}>
      <ModalContainer ref={modalRef}>
        <CloseButton type="button" onClick={onClose}>
          <SvgIcons aria-label="close modal select icon" width={18} height={18}>
            <use href={`${sprite}#icon-x-close`}></use>
          </SvgIcons>
        </CloseButton>
        <ModalHeader>Filters</ModalHeader>
        <BgChange />
        <Filter />
      </ModalContainer>
    </Wraper>
  );
};
