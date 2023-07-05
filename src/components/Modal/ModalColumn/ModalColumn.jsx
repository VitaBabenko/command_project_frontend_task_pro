import { DialogTitle, Box, DialogContent } from "@mui/material";
import { CustomButton } from "../../Button/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import { CustomDialog, StyleInput } from "./ModalColumn.styled";
import { useState } from "react";

export const ModalColumn = ({ isOpen, onClose, type = "create", initialState = '', onRemove, onUpdate }) => {
  const [title, setTitle] = useState(initialState);

  const reset = () => {
    setTitle('');
  }

  const handleClose = () => { 
    reset();
    onClose();
  }

  const handleChange = ({ target }) => { 
    setTitle(target.value);
  }

  const handleButtonClick = (title) => { 
    if (type === "create") { 
      onRemove(title);
      handleClose();
    }
    if (type === "edit") {
      console.log(title)
      onUpdate(title);
      handleClose();
    }

    
  }


  return (
    <CustomDialog
      open={isOpen}
      fullWidth={true}
      onClose={handleClose}
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="24px"
      >
        <DialogTitle
          sx={{
            color: "var(--primaryTextColor)",
            padding: "0",
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          {type === 'create' ? 'Add Column' : 'Edit Column'}
        </DialogTitle>
        <CloseIcon
          onClick={handleClose}
          sx={{
            color: "var(--primaryTextColor)",
            position: "absolute",
            top: "14px",
            right: "14px",
            height: "18px",
            width: "18px",
            cursor: "pointer",
          }}
        />
      </Box>
      <DialogContent>
        <StyleInput
          autoFocus
          id="title"
          placeholder="Title"
          name="title"
          type="text"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: false }}
          value={title}
          onChange={handleChange}
        />
        <CustomButton
            type="submit"
            onClick={() => handleButtonClick(title)} 
            styleOptions={{
                background: 'var(--addCardButtonBackground)',
                color: 'var(--addCardButtonColor)',
                width: '302px',
                height: '49px'
            }}
            style={{background: 'var(--addPlusButtonBackground)'}}
            customIcons={{stroke: 'var(--addPlusIconColor'}}
        >
            {type === 'create' ? 'Add' : 'Edit'}
        </CustomButton>
        {/* <CustomButton onClick={() => handleButtonClick(title)} style={{height: '49px !important'}}>
          {type === 'create' ? 'Add' : 'Edit'}
        </CustomButton> */}
      </DialogContent>
    </CustomDialog>
  );
};