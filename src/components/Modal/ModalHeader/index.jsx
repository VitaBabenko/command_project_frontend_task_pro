import CloseIcon from "@mui/icons-material/Close";
import { ModalHeaderWrapper, ModalHeaderWrapperTittleContainer, ModalHeaderTittle, ModalHeaderClose, } from './ModalHeader.styled'

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
        </ModalHeaderClose>
      </ModalHeaderWrapperTittleContainer>
    </ModalHeaderWrapper>
  );
};