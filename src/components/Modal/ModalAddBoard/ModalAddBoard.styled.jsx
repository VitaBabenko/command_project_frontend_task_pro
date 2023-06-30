import { Dialog } from '@mui/material';
import { styled } from '@mui/system';



export const CustomDialog = styled(Dialog)({
  
  '& .MuiPaper-root': {
    backgroundColor: 'black',
    maxWidth: '350px',
    padding: '24px',
  margin: '0px',
  },

  '& .MuiDialogContent-root': {
    padding: '0px',
  }
});