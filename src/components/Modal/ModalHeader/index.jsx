import spriteIcon from '../../../images/sprite.svg'
import './style.css';

export const ModalHeader = ({ headerTitle, toggle }) => {
  return (
    <div className='modal-header'>
      <div className='modal-header__title-wrapper'>
        <span className='modal-header__title'>{headerTitle}</span>
        <button className='modal-header__close' onClick={toggle}>
          <svg className='modal-header__icon-close' aria-label="icon close" width="18" height="18">
          <use href={spriteIcon + '#icon-x-close'}></use>
        </svg></button>
      </div>
    </div>
  );
};