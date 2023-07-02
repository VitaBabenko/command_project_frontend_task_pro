import { Dialog } from '@mui/material';
// import { styled as styledComponents } from '@mui/system';
import styled from 'styled-components';



export const CustomDialog = styled(Dialog)`
  
  & .MuiPaper-root {
    background-color: var(--themeListBgColor);
    max-width: 350px;
    padding: 24px;
  margin: 0px;
  };

  & .MuiDialogContent-root {
    padding: 0px,
  };
`

export const ModalTitle = styled.p`
  color: var(--primaryTextColor);
  margin-bottom: 24px;
`

export const ModalInput = styled.input`
color: var(--primaryTextColor);
background-color: var(--themeListBgColor);
border: 1px solid #BEDBB0;
filter: drop-shadow(0px 4px 16px rgba(22, 22, 22, 0.08));
border-radius: 8px;
&:hover, &:focus {
  border-color: #BEDBB0;
    box-shadow: 0px 0px 0px 1px #87d3ae;
}
`

export const InputWrapper = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin-bottom: 24px;
`

export const IconsTitle = styled.p`
color: var(--primaryTextColor);
font-size: 14px;
font-weight: 500;
line-height: 1.5;
margin-bottom: 14px;
`

export const StyledLabel = styled.label`
display: inline-block;
line-height: 0;
border: 1px solid transparent;

&:hover, &:focus {
  border: 1px solid var(--primaryTextColor);
  border-radius: 4px;
};

& :not(:last-child) {
   margin-right: 8px;
  }

&:checked {
  fill: white;
}
`

export const IconWrapper = styled.div`
  margin-bottom:24px;
`

export const BgWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 4px;
   margin-right: auto;
   max-width: 268px;
`

export const BgLabel = styled.label`
  display: block;
  width: 28px;
  height: 28px;
  /* background-color: black; */
  &:hover, &:focus {
  border: 1px solid  var(--themeListBgColor);
  border-radius: 6px;
};
  
`

export const ImgBg = styled.img`
border-radius: 6px;
`

export const InputStyled = styled.input`
&:checked + svg {
  stroke:var(--primaryTextColor);
  fill: transparent;
}
`

export const SvgModal = styled.svg`
width: 18px;
height: 18px;
fill: transparent;
stroke: var(--iconColor);
`

export const ErrorText = styled.p`
color: red;
`