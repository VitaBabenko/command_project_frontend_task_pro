import sprite from '../../images/sprite.svg';
import { BgChange } from './BgChange/BgChange';
import { Filter } from './Filter/Filter';
import {
  ModalContainer,
  ModalHeader,
  CloseButton,
  SvgIcons,
} from './PopUpFilter.styled';

export const PopUpFilter = () => {
  return (
    <ModalContainer>
      <CloseButton type="button">
        <SvgIcons aria-label="close modal select icon" width={18} height={18}>
          <use href={`${sprite}#icon-x-close`}></use>
        </SvgIcons>
      </CloseButton>
      <ModalHeader>Filters</ModalHeader>
      <BgChange />
      <Filter />
    </ModalContainer>
  );
};
