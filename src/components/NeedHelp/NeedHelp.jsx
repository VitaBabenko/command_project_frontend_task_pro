import spriteIcon from '../../images/sprite.svg';
import './style.css';
import { Modal } from '../Modal';
import { EditProfile } from '../EditProfile';
import { useState } from 'react';

export const NeedHelp = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className="need-help__wrapper">
      <img
        className="need-help__img"
        src="https://res.cloudinary.com/dxhypjavs/image/upload/v1687412198/command_project_task_pro_images/additionally/flowerpot.png"
        alt=""
      />
      <p className="need-help__text">
        If you need help with <a href="*">TaskPro</a>, check out our support
        resources or reach out to our customer support team.
      </p>
      <button className="need-help__btn" onClick={toggle}>
        <svg
          className="modal-header__icon-help-circle"
          aria-label="icon close"
          width="18"
          height="18"
        >
          <use href={spriteIcon + '#icon-help-circle'}></use>
        </svg>
        <span className="need-help__btn-title">Need help?</span>
      </button>

      {open && (
        <Modal {...{ open, toggle }}>
          <EditProfile />
        </Modal>
      )}
    </div>
  );
};
