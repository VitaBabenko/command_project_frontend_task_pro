import { ModalBodyWrapperDiv } from "../Modal.styled";

export const ModalBodyWrapper = ({ children }) => {
  return (
    <ModalBodyWrapperDiv>
      {children}
    </ModalBodyWrapperDiv>
  );
};