import { Dialog } from '@mui/material';
// import { styled as styledComponents } from '@mui/system';
import styled from 'styled-components';

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    background-color: var(--themeListBgColor);
    max-width: 350px;
    padding: 24px;
    margin: 0px;
  }

  & .MuiDialogContent-root {
    padding: 0px;
  }
`;

export const ModalTitle = styled.p`
  color: var(--primaryTextColor);
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
`;

export const ModalInput = styled.input`
  color: var(--primaryTextColor);
  opacity: 0.4;
  background-color: var(--themeListBgColor);
  width: 302px;
  height: 49px;
  padding: 14px 18px;
  border: 1px solid #bedbb0;
  filter: drop-shadow(0px 4px 16px rgba(22, 22, 22, 0.08));
  border-radius: 8px;
  &:hover,
  &:focus {
    opacity: 1;
    /* border-color: #bedbb0; */
    box-shadow: 0px 0px 0px 1px #87d3ae;
    border-color: #bedbb0;
    outline: none;
  }

  &::placeholder {
    color: var(--primaryTextColor);
  }
`;

export const InputWrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const IconsTitle = styled.p`
  color: var(--primaryTextColor);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 14px;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  line-height: 0;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    border: 1px solid var(--primaryTextColor);
    border-radius: 4px;
  }

  & :not(:last-child) {
    margin-right: 8px;
  }

  &:checked {
    fill: white;
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 24px;
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-right: auto;
  max-width: 268px;
`;

export const BgLabel = styled.label`
  display: block;
  width: 28px;
  height: 28px;
  /* background-color: black; */
  &:hover,
  &:focus {
    border: 1px solid var(--themeListBgColor);
    border-radius: 6px;
  }
`;

export const ImgBg = styled.img`
  border-radius: 6px;
`;

export const InputStyled = styled.input`
  &:checked + svg {
    stroke: var(--primaryTextColor);
    fill: transparent;
  }
`;

export const SvgModal = styled.svg`
  width: 18px;
  height: 18px;
  fill: transparent;
  stroke: var(--iconColor);
`;

export const ErrorText = styled.p`
  color: red;
`;

export const DefaultImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: var(--boardBgColor);
  border-radius: 6px;
  /* background-color: black; */
  &:hover,
  &:focus {
    border: 1px solid var(--themeListBgColor);
    border-radius: 6px;
  }
`

export const DefaultImg = styled.svg`
width: 18px;
  height: 18px;
  fill: transparent;
  stroke: var(--iconColor);
`

export const InputBg = styled.input`
&:checked + img {
    scale: 1.3;
  }
`