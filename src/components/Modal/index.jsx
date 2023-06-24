import React, { Children } from 'react';
import { ModalBodyWrapper } from './ModalBodyWrapper';
import { ModalHeader } from './ModalHeader';
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

