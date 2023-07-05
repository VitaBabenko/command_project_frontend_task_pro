import styled from 'styled-components';

// import { Dialog } from '@mui/material';

// export const CustomDialog = styled(Dialog)({
//   '& .MuiPaper-root': {
//     backgroundColor: 'var(--themeListBgColor)',
//     maxWidth: '350px',
//     padding: '24px',
//     margin: '0px',
//     border: '1px solid var(--modalBorderColor)',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   },

//   '& .MuiDialogContent-root': {
//     padding: '0px',
//   },
// });

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 0;
//   right: 0;
//   padding: 7px;
//   margin-right: 14px;
//   /* font-size: 10px; */
//   line-height: 0;
//   color: var(--primaryTextColor);
//   /* color: red; */
//   border: none;
//   background-color: transparent;
//   cursor: pointer;
// `;

export const Container = styled.div`
  position: absolute;
  bottom: 22px;
  right: 54px;
  z-index: 999;

  max-height: 100px;
  overflow: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 165px;
  padding: 18px;
  border-radius: 8px;
  background: var(--popupBackground);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const List = styled.ul`
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 4px 0;

  border: none;
  background: transparent;
  color: inherit;
`;

export const Title = styled.span`
  color: inherit;
  font-size: 14px;
  letter-spacing: -0.28px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BtnTitles = styled.span`
  display: inline-block;
  margin-right: auto;
`;

export const SvgIcons = styled.svg`
  fill: none;
  stroke: var(--iconCardColor);
`;

export const ListItem = styled.li`
  display: flex;
  gap: 8px;
  color: var(--popupColor);

  &:hover,
  &:focus {
    color: var(--poupHoverColor);

    ${Button} {
      color: var(--poupHoverColor);
    }

    ${SvgIcons} {
      stroke: var(--poupHoverColor);
    }
  }
`;
