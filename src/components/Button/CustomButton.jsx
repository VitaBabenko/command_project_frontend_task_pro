import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



export const CustomButton = ({
  children,
  onClick,
  styleOptions = {},
    type = "button",
  isWhiteBackground = false,
}) => {
    const iconStyle = {
    width: 28,
        height: 28,
    size: 14,
    backgroundColor: isWhiteBackground ? "#FFFFFF" : "#121212",
    color: isWhiteBackground ? '#121212' : "#FFFFFF",
    borderRadius: "6px",
    };
    
  return (
    <Button
          startIcon={
        <AddIcon
          fontSize="small"
          sx={iconStyle}
        />
      }
      variant="contained"
      onClick={onClick}
      fullWidth
      type={type}
      sx={{
          height: "49px",
          maxWidth: "352px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "1.5",
        letterSpacing: "-0.02em",
        display: "flex",
        alignItems: "center",
        background: isWhiteBackground? "#121212" : "#BEDBB0",
        borderRadius: "8px",
        color: isWhiteBackground? "#FFFFFF" : "#161616",
        textTransform: "none",
        "&:hover": {
          background: isWhiteBackground ? "#121212" : "#BEDBB0",
        },
        ...styleOptions,
      }}
    >
      {children}
    </Button>
  );
};


export const CustomButtonSend = ({
  children,
  onClick,
  styleOptions = {},
    type = "button",
  isWhiteBackground = false,
}) => {
    
    
  return (
    <Button          
      variant="contained"
      onClick={onClick}
      fullWidth
      type={type}
      sx={{
          height: "49px",
          maxWidth: "352px",
          fontFamily: "Poppins, sans-serif",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "1.5",
        letterSpacing: "-0.02em",
        display: "flex",
        alignItems: "center",
        background: isWhiteBackground? "#121212" : "#BEDBB0",
        borderRadius: "8px",
        color: isWhiteBackground? "#FFFFFF" : "#161616",
        textTransform: "none",
        "&:hover": {
          background: isWhiteBackground ? "#121212" : "#BEDBB0",
        },
        ...styleOptions,
      }}
    >
      {children}
    </Button>
  );
};