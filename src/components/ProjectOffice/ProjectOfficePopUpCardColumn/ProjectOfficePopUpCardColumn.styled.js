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
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 14px;
  border-top: 1px solid var(--modalGorizontalBorderColor);
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  /* color: var(--primaryTextColor); */
  color: red;
`;

export const Button = styled.button`
  border: none;
  background: inherit;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-decoration-line: underline;

  /* color: var(--popupTextColor); */
  color: red;

  cursor: pointer;
`;
