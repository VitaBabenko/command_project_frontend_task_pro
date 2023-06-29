import { useRef, useEffect, useCallback } from 'react';
import {
  ModalWrapper,
  ModalContent,
  ThemeSelectIcon,
} from './CardModal.styled';
import sprite from '../../images/sprite.svg';

export const CardModal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = useCallback(
    event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleEscKey = useCallback(
    event => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, handleOutsideClick, handleEscKey]);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent ref={modalRef}>
        <ThemeSelectIcon
          aria-label="open theme select icon"
          onClick={() => onClose()}
        >
          <use href={sprite + '#icon-x-close'}></use>
        </ThemeSelectIcon>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
