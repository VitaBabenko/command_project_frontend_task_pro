// import spriteIcon from '../../../images/sprite.svg'

import CloseIcon from "@mui/icons-material/Close";
import { ModalHeaderWrapper, ModalHeaderWrapperTittleContainer,ModalHeaderTittle,ModalHeaderClose,  } from './ModalHeader.styled'

export const ModalHeader = ({ headerTitle, toggle }) => {
  return (
    <ModalHeaderWrapper>
      <ModalHeaderWrapperTittleContainer>
        <ModalHeaderTittle>{headerTitle}</ModalHeaderTittle>
        <ModalHeaderClose onClick={toggle}>
          <CloseIcon
            sx={{
              color: " var(--primaryTextColor);",
              position: "absolute",
              height: "18px",
              width: "18px",
              cursor: "pointer",
            }} />
          {/* <svg className='modal-header__icon-close' aria-label="icon close" width="18" height="18">
          <use href={spriteIcon + '#icon-x-close'}></use>
        </svg> */}
        </ModalHeaderClose>
      </ModalHeaderWrapperTittleContainer>
    </ModalHeaderWrapper>
  );
};