import { DialogTitle, Box, DialogContent } from "@mui/material";
import { CustomButton } from "../../Button/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import { CustomDialog, StyleInput } from "./ModalColumn.styled";

export const ModalColumn = ({ isOpen, onClose, type = "create" }) => {

  return (
    <CustomDialog
      open={isOpen}
      fullWidth={true}
      onClose={onClose}
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
            color: "white",
            padding: "0",
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            lineHeight: "1.5",
          }}
        >
          {type === 'create' ? 'Add Column' : 'Edit Column'}
        </DialogTitle>
        <CloseIcon
          onClick={onClose}
          sx={{
            color: "white",
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
          autoFocus="true"
          id="title"
          placeholder="Title"
          name="title"
          type="text"
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: false }}
        />
              <CustomButton>
                  Add
        </CustomButton>
      </DialogContent>
    </CustomDialog>
  );
};