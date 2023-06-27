import React, { Children } from 'react';
import { ModalBodyWrapper } from './ModalBodyWrapper';
import { ModalHeader } from './ModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import { setNameModal } from 'redux/modal';
import { getModalMapData } from './ModalMapContainer';
import './style.css';

export const Modal = ({
  children,
  open,
  toggle,
  manualControlBody = false,
  ...props }) => {

  const childrenWithProps = Children.map(children, (child) => {
    return React.cloneElement(child, { toggle, open, HeaderRender: (headerTitle) => <ModalHeader {...{ headerTitle, toggle }} /> });
  });

  const activeClass = open ? 'active' : '';
  return (
    <>
      {
        (<div className={`modal ${activeClass}`} onClick={toggle} {...props} >
          <div className={`modal__content ${activeClass}`} onClick={(e) => e.stopPropagation()}>
            <ModalBodyWrapper {...{ manualControlBody }}>
              {childrenWithProps}
            </ModalBodyWrapper>
          </div>
        </div>)
      }
    </>
  );
};

export const ModalContainer = () => {
  const modalName = useSelector((state) => state.modal.modalName);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(setNameModal(''));
  };

  return (
    <Modal {...{ open: modalName, toggle }}>
      {getModalMapData(modalName)}
    </Modal>
  );
};