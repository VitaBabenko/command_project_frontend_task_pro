import { useRef, useEffect } from 'react';
import { ModalWrapper, ModalContent, ThemeSelectIcon } from './MyModal.styled';
import sprite from '../../images/sprite.svg';

export const MyModal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

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
