import { TextField, Dialog } from "@mui/material";
// import { styled } from '@mui/system';
import styled from 'styled-components';


export const StyleInput = styled(TextField)`
  /* background-color: var(--currentLinkBgColor); */
  max-width: 302px;
  margin-bottom: 24px;

        & label.Mui-focused {
          color: #fff;
        };

  & .MuiInputBase-input {
          padding: 14px 16px;
          color: var(--primaryTextColor);
          background-color: var(--currentLinkBgColor);

        };

        & .MuiFormLabel-root {
          color: #fff;
        };

  & .MuiInputBase-root {
          opacity: 0.4;
    border-radius: 8px;
              margin-bottom: 24px;
    & :hover {
      opacity: 1.0;
    };

    & :focus {
      opacity: 1.0;
    }
        };

        & .MuiOutlinedInput-root {
          & fieldset {
            border-color: #BEDBB0;
          };
          & :hover fieldset {
            border-color: #BEDBB0;
          };
          & .Mui-focused fieldset {
            border-color: #BEDBB0;
          };
        };
`

export const CustomDialog = styled(Dialog)`
  
  & .MuiPaper-root {
    background-color: var(--themeListBgColor);
    max-width: 350px;
    padding: 24px;
  margin: 0px;
  };

  & .MuiDialogContent-root {
    padding: 0px;
  }

`