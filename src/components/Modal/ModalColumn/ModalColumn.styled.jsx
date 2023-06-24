import { TextField, Dialog } from "@mui/material";
import { styled } from '@mui/system';


export const StyleInput = styled(TextField)({
  backgroundColor: "#1F1F1F",
  maxWidth: "302px",
   marginBottom: '24px',

        "& label.Mui-focused": {
          color: "#fff",
        },

  "& .MuiInputBase-input": {
          padding: "14px 16px",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        },
        "& .MuiFormLabel-root": {
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
        },

  "& .MuiInputBase-root": {
          opacity: '0.4',
    borderRadius: "8px",
    '&:hover': {
      opacity: '1.0',
    },

    '&:focus': {
      opacity: '1.0',
    }
        },

        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#BEDBB0",
          },
          "&:hover fieldset": {
            borderColor: "#BEDBB0",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#BEDBB0",
          },
        },

});

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