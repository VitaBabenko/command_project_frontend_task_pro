import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { defaultAvatarEditorValue, defaultInputTypeRangeProps, ECurrentEditOperationEditData, rotateValue } from "./util";
import './style.css';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const CustomSlider = styled(Slider)({
  color: 'var(--greenGreenBlueColor)'
})

export const AvatarEditorContainer = ({ image, handleSetCurrentImg, handleClose }) => {
  const editor = useRef(null);
  const [editorValues, setEditorValues] = useState(defaultAvatarEditorValue);
  const { scale, height, width, rotate, position, borderRadius } = editorValues;

  const handlePositionChange = (position) => {
    setEditorValues({ ...editorValues, position });
  };

  const handleScale = (e) => {
    const scale = e.target.value;
    setEditorValues({ ...editorValues, scale });
  };

  const handleRotate = (rotate) => {
    setEditorValues({ ...editorValues, rotate });
  };

  const handleSave = () => {
    const img = editor.current.getImage().toDataURL();
    handleSetCurrentImg(img);
    handleClose();
  }

  return (
    <>
      <AvatarEditor
        ref={editor}
        scale={scale}
        width={width}
        height={height}
        position={position}
        onPositionChange={handlePositionChange}
        rotate={rotate}
        borderRadius={borderRadius}
        image={image}
      />
      <Box width={200}>
        <CustomSlider
          {...defaultInputTypeRangeProps} onChange={handleScale}
          size="small"
          defaultValue={50}
          aria-label="Small"
          valueLabelDisplay="auto"
          color="secondary"
        />
      </Box>
      <button className="btn" onClick={() => handleRotate(rotate + rotateValue)}><RotateLeftIcon sx={{ color: 'var(--greenGreenBlueColor)'}} className="iconEditAvatar" /></button>
      <button className="btn" onClick={() => handleRotate(rotate - rotateValue)}><RotateRightIcon sx={{ color: 'var(--greenGreenBlueColor)'}} className="iconEditAvatar" /></button>
      <button className="btn" onClick={handleSave}><DoneIcon sx={{ color: 'var(--greenGreenBlueColor)'}} className="iconEditAvatar" /></button>
      <button className="btn" onClick={handleClose}><CloseIcon sx={{ color: 'var(--greenGreenBlueColor)'}} className="iconEditAvatar" /></button>
    </>
  )
};

